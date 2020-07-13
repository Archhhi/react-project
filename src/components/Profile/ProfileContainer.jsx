import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    addContact,
    addElementId,
    deleteContact,
    onEditContact,
    setHandler
} from "../../redux/profile-reducer";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    render() {
        return (
            <Profile isAuth={this.props.isAuth}
                     contactsData={this.props.contactsData}
                     addContact={this.props.addContact}
                     onEditContact={this.props.onEditContact}
                     deleteContact={this.props.deleteContact}
                     dieElement={this.props.dieElement}
                     addElementId={this.props.addElementId}
                     setHandler={this.props.setHandler}
                     term={this.props.term}
                     date={this.props.date}
                     savePhoto={this.props.savePhoto}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    contactsData: state.ProfilePage.contactsData,
    dieElement: state.ProfilePage.dieElement,
    term: state.ProfilePage.term,
    date: state.ProfilePage.data,
    avatar: state.ProfilePage.avatar
});

export default compose(
    connect(mapStateToProps, {addContact, addElementId, onEditContact, deleteContact, setHandler})(ProfileContainer));