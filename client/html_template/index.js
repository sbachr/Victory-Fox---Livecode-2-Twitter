const app = new Vue({
    el: '#app',
    data() {
        return {
            isLogin : false,
            useremail: '',
            password: '',
            tweets : [],
            _id : '',
            name : '',
            username : '',
            email : '',
            follows : [],
            followers : [],
        }
    },
    mounted() {
        this.getAllTweets(),
        this.checkLogin()
    },
    methods: {
        signin() {
            axios({
                method : 'POST',
                url : 'http://localhost:3000/users/signin',
                data : {
                    email: this.useremail,
                    password: this.password
                }
            })
            .then(response => {
                localStorage.setItem("token", response.data);
                this.isLogin = true
                this.getUserProfile()

            })
            .catch(err => {
                console.log(err)
            })
        },
        signout(){
            localStorage.removeItem("token");
            this.isLogin = false
        },
        signinCheck() {
            
        },
        checkLogin() {
            let isToken = localStorage.getItem("token")
            if(isToken){
                this.isLogin = true
            }
        },
        getAllTweets(){
            axios({
                method : 'GET',
                url : 'http://localhost:3000/tweets',
            })
            .then(response => {
                this.tweets = response.data
            })
            .catch(err => {
                console.log(err)
            })
        },
        getUserProfile(){
            let token = localStorage.getItem("token")
            axios({
                method : 'POST',
                url : 'http://localhost:3000/users',
                headers : {
                    token
                }
            })
            .then(response => {
                this._id = response.data._id
                this.getUserTweet(this._id)
                this.name = response.data.name
                this.username = response.data.username
                this.email = response.data.email
                this.follows = response.data.follows
                this.followers = response.data.followers
            })
            .catch(err => {
                console.log(err);
                
            })
        },
        getUserTweet(id){
            axios({
                method : 'GET',
                url : `http://localhost:3000/tweets/${id}`,
            })
            .then(response => {
                console.log('getUserTweet');
                console.log(response);
                
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
})