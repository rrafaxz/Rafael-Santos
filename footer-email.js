const emailModal = document.getElementById('emailModal');
const emailOpenButtons = Array.from(document.querySelectorAll('[data-email-open]'));
const emailCloseButtons = emailModal
  ? Array.from(emailModal.querySelectorAll('[data-email-close]'))
  : [];
const emailCloseButton = emailModal ? emailModal.querySelector('.email-modal-close') : null;
const emailSendButton = emailModal ? emailModal.querySelector('[data-email-send]') : null;

let emailLastTrigger = null;

function setEmailModalOpen(isOpen) {
  if (!emailModal) return;

  emailModal.classList.toggle('is-open', isOpen);
  emailModal.setAttribute('aria-hidden', String(!isOpen));
  document.body.classList.toggle('email-modal-open', isOpen);

  if (isOpen) {
    window.setTimeout(() => {
      emailCloseButton?.focus();
    }, 120);
    return;
  }

  emailLastTrigger?.focus?.();
}

function openEmailModal(trigger) {
  emailLastTrigger = trigger || document.activeElement;
  setEmailModalOpen(true);
}

function closeEmailModal() {
  setEmailModalOpen(false);
}

if (emailModal) {
  emailOpenButtons.forEach((button) => {
    button.addEventListener('click', () => openEmailModal(button));
  });

  emailCloseButtons.forEach((button) => {
    button.addEventListener('click', closeEmailModal);
  });

  emailSendButton?.addEventListener('click', () => {
    window.setTimeout(closeEmailModal, 60);
  });

  document.addEventListener('keydown', (event) => {
    if (!emailModal.classList.contains('is-open')) return;
    if (event.key === 'Escape') closeEmailModal();
  });
}
