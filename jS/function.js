const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#mi-mail')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    $buttonMailto.setAttribute('href', `mailto:edgardo.otero@live.com?subject=${form.get('name')}${form.get('user_mail')}&body=${form.get('user_message')}`)
    $buttonMailto.click()
}

