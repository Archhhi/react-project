import React, {useState} from "react";
import style from "../Profile.module.css";
import del from "../../../assets/images/del.png";
import print from "../../../assets/images/print.png";
import {createField, Input} from "../../common/FormControls/FormControls";
import {required} from "../../utils/validators/validators";
import {reduxForm} from "redux-form";
import mail from "../../../assets/images/mail.ico";
import phone from "../../../assets/images/phone.png";
import avatarFemale from "../../../assets/images/avatarFemale.png";
import avatarMale from "../../../assets/images/avatarMale.png";

const EditContactForm = ({handleSubmit, error, setOut}) => {
    return (
        <form className={style.formBlock} onSubmit={handleSubmit}>
            {createField('Имя', 'name', [required], Input, {type: 'text'})}
            {createField('Email', 'email', [required], Input, {type: 'text'})}
            {createField('Номер телефона', 'phoneNumber', [required], Input, {type: 'phone'})}
            <span className={style.none}>{createField('Индекс', 'id', [], Input, {type: 'text'})}</span>

            <span className={style.sex}><b>Пол:</b></span>
            <label htmlFor="male">Мужской</label>
            <span className={style.radio}>{createField('', 'sex', [required], Input,
                {type: 'radio', value: "male", id: 'male'})}</span>

            <label htmlFor="female">Женский</label>
            <span className={style.radio}>{createField('', 'sex', [required], Input,
                {type: 'radio', value: "female", id: 'female'})}</span>

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}

            <div>
                <button>Добавить</button>
                <button onClick={() => setOut()}>Закрыть</button>
            </div>
        </form>
    )
}

const EditContactReduxForm = reduxForm({form: 'editContactForm'})(EditContactForm)

const Contacts = (props) => {

    let [editContact, setContact] = useState(false);
    let [editMenu, setEditMenu] = useState(false);

    const editElement = (id) => {
        props.addElementId(id);
        setContact(true);
    }

    const activateEditContact = (formData) => {
        setContact(false);
        props.onEditContact(formData);
    }

    const setOut = () => {
        setContact(false);
    }

    const activateEditMenu = () => {
        setEditMenu(true);
    }

    const deactivateEditMenu = () => {
        setEditMenu(false);
    }

    return (
        <div className={style.contactsBlockElement}>
            {!editContact &&
            <>
                {!editMenu &&
                <>
                    <span className={style.menu} onClick={activateEditMenu} title='параметры'>&#8226;&#8226;&#8226;</span>
                </>
                }
                {editMenu &&
                <>
                    <span className={style.menu} onClick={deactivateEditMenu}>&#8226;&#8226;&#8226;</span>
                    <div className={style.menuBlock}>
                    <span onClick={() => {
                        props.removeElement(props.id)
                    }} className={style.edit}><img src={del} title={'удалить'} alt="удалить"/></span>
                    <span onClick={() => {
                        editElement(props.id)
                    }} className={style.delete}><img src={print} title={'редактировать'} alt="удалить"/></span>
                    </div>
                </>
                }

                <div className={style.avatar}>
                    {(props.sex === "male")
                        ? <img src={avatarMale} alt="avatar"/>
                        : <img src={avatarFemale} alt="avatar"/>
                    }
                </div>

                <div className={style.name}>
                    <span>{props.name}</span>
                </div>
                <div className={style.elementBlock}>
                    <div className={style.icon}><img src={mail} alt="почта"/></div>
                    <span className={style.element}>{props.email}</span><br/>
                    <div className={style.icon}><img src={phone} alt="телефон"/></div>
                    <span className={style.element}>{props.phoneNumber}</span>
                </div>
            </>
            }
            {editContact &&
            <>
                <div className={style.buttons}>
                    <div className={style.avatar}>
                        {(props.sex === "male")
                            ? <img src={avatarMale} alt="avatar"/>
                            : <img src={avatarFemale} alt="avatar"/>
                        }
                    </div>
                    <span className={style.name}>{props.name}</span>

                    <EditContactReduxForm setOut={setOut} onSubmit={activateEditContact}/>

                </div>
            </>
            }
        </div>
    )

}

export default Contacts;