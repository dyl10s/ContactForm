class Api {

    constructor(){
        this.BASE_URL = "https://localhost:5001/api/Contact"
    }
    

    SubmitForm = async (firstName, lastName, email, message) => {
        return fetch(this.BASE_URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                message: message
            })
        }).then(x => x.json())
    }

}

export default Api;