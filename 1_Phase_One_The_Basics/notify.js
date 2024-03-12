const notifyByEmail = (email) => {return `Email sent to: ${email}`}
const notifyByText = (phone) => {return `Text sent to: ${phone}`}
const notify = (input, method) => {return method(input)}
