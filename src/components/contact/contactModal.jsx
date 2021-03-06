import React from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';
import contactStyles from './contact.module.scss';

Modal.setAppElement('#root');

export default class ContactModal extends React.Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
      isMouseOverSend: false,
    }

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  sendEmail(event) {
    event.preventDefault();
    emailjs
      .sendForm(
        'brady_y_liu_gmail_com',
        'template_QNrdDv1b',
        event.target,
        'user_0LZknLGWXBtr1M0XfhNiU',
      )
      .then(() => {
        console.log('Your message has been successfully!');
        this.closeModal();
      });
  }

  render() {

    return (
      <div className={contactStyles.contactModal}>
        <div className={contactStyles.cTBox} onClick={this.openModal}>
          <div className={contactStyles.cTBoxTitle}>Got questions?</div>
          <div className={contactStyles.cTBoxText}>
            Feel free to contact me about any inquiry you might have. Also, you could always just send me a friendly hello.
          </div>
          <div className={contactStyles.cTBoxBottomText}>
            Say Hello
          </div>
        </div>

        <Modal
          className={contactStyles.modal}
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
        >
          <div className={contactStyles.modalHeader}>
            <div className={contactStyles.modalTitle}>CONTACT ME</div>
            <form
              id='contact-form'
              onSubmit={this.sendEmail}
              className={contactStyles.contactForm}
            >
              <input type='hidden' name='contact_number' />
              <label>
                Name*
                <div className={contactStyles.smallText}>I'd like to know who I'm talking to.</div>
                <input type='text' name='user_name' className={contactStyles.formInput} required />
              </label>
              <label>
                Email*
                <input type='email' name='user_email' className={contactStyles.formInput} required />
              </label>
              <label>
                Message*
                <textarea name='message' className={contactStyles.formText} required />
              </label>
              <input
                type='submit'
                value='Send'
                className={contactStyles.formSubmit}
              />
            </form>
          </div>
        </Modal>
      </div>
    )
  }
}

//Reference
//https://dashboard.emailjs.com/