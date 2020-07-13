import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";
import style from "./Profile.module.css";
import Contacts from "./Contacts/Contacts";
import plus from "../../assets/images/plus.png";
import {createField, Input} from "../common/FormControls/FormControls";
import {required} from "../utils/validators/validators";
import {reduxForm} from "redux-form";
import Footer from "../Footer/Footer";

const ContactForm = ({handleSubmit, error, setOut}) => {
    return (
        <>
            <form className={style.formBlock} onSubmit={handleSubmit}>
                <h2 className={style.h2}>Новый контакт</h2>
                {createField('Имя', 'name', [required], Input, {type: 'text'})}
                {createField('Email', 'email', [required], Input, {type: 'text'})}
                {createField('Номер телефона', 'phoneNumber', [required], Input, {type: 'phone'})}

                <span className={style.sex}><b>Пол:</b></span>
                <label htmlFor="male">Мужской</label>
                <span className={style.radio}>{createField('', 'sex', [required], Input,
                    {type: 'radio', value: "male", id: 'male'})}</span>

                <label htmlFor="female">Женский</label>
                <span className={style.radio}>{createField('', 'sex', [required], Input,
                    {type: 'radio', value: "female", id: 'female'})}</span>

                <div>
                    <button>Добавить</button>
                    <button onClick={() => setOut()}>Закрыть</button>
                </div>

                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
            </form>
        </>
    )
}

const ContactReduxForm = reduxForm({form: 'contact'})(ContactForm)

const Profile = React.memo(props => {

    let [editMode, setEditMode] = useState(false);
    let [editElement, setElement] = useState([]);

    useEffect(() => {
        if (props.contactsData) {
            setElement(props.contactsData)
        }
    }, [props.contactsData])

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    const removeElement = (id) => {
        props.deleteContact(id)
        setElement(
            editElement.filter(el => el.id !== id)
        )
    }

    const compareNumeric = (editElement) => {
        editElement.sort(function (a, b) {
            let dateA = new Date(a.date), dateB = new Date(b.date)
            return dateA - dateB //сортировка по возрастающей дате
        })
    }

    const searchingFor = (term) => {
        return function (props) {
            return props.name.toLowerCase().includes(term.toLowerCase()) || !term;
        }
    }

    compareNumeric(editElement);

    let contactsElement =
        [...editElement]
            .reverse()
            .filter(searchingFor(props.term))
            .map((c) => <Contacts
                name={c.name}
                email={c.email}
                id={c.id}
                key={c.id}
                phoneNumber={c.phoneNumber}
                sex={c.sex}
                removeElement={removeElement}
                onEditContact={props.onEditContact}
                addElementId={props.addElementId}
            />);

    const activateEditMode = () => {
        setEditMode({
            editMode: true
        });
    }

    const addContact = (formData) => {
        setEditMode({
            editMode: false
        });
        props.addContact(formData);
    }

    const setOut = () => {
        setEditMode(false);
    }

    const searchHandler = (event) => {
        props.setHandler(event.target.value)
    }

    return (
        <>
            <div className={style.topBlock}>
                <h1>Ваши контакты:</h1>

                <div className={style.formSearch}>
                    <form>
                        <input type="text" placeholder="Поиск по имени..." onChange={searchHandler}/>
                    </form>
                </div>

                {!editMode &&
                <div className={style.imgBlock} onClick={activateEditMode}>
                    <img src={plus} title="добавить новый контакт" alt="Добавить"/>
                </div>
                }
                {editMode &&
                <div className={style.buttons}>
                    <ContactReduxForm setOut={setOut} onSubmit={addContact}/>
                </div>
                }
                <div className={style.contactsBlock}>
                    {contactsElement}
                </div>
            </div>

            <Footer />

        </>
    )
})

export default Profile;