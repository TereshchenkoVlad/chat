export default ({ isAuth, values, errors }) => {
    const rules = {
        email: (value) => {
            if (!value) { 
                errors.email = `Введіть електронну пошту`
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = `Неправильний формат пошти`
              }
        },
    
        password : (value) => {
            if (!value) {
                errors.password = `Введіть пароль`
            } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(value)) {
              errors.password = isAuth ? 'Невірний логін або пароль' : 'Пароль повинен містити літери та цифри, 8 символів'
            }
        },

        passwordRepeat: (value) => {
          if (!value) {
              errors.passwordRepeat = `Введіть пароль повторно`
          } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(value)) {
            errors.passwordRepeat = 'Пароль повинен містити літери та цифри, 8 символів'
          }
      },
        
        fullname: value => {
          if (!value) {
            errors.fullname = `Введіть ім'я`
          } 
        }
    }

    Object.keys(values).forEach(key => rules[key] && rules[key](values[key]))
}