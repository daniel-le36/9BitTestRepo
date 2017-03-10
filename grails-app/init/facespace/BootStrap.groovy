package facespace

class BootStrap {

    def init = { servletContext ->
        // This code runs on Grails startup.
        // Try adding some new accounts for testing!
//        new Transaction(amount: 5000, category: 'Bacon', date: '12/13/2017').save()
    }
    def destroy = {
    }
    def newTransaction(userAmount, userCategory, userDate) {
        def transaction = new Transaction(amount: userAmount, category: userCategory, date: userDate)
        transaction.save()
    }

    def createSaveAccount(name, password, firstStatus){
        def account = new UserAccount(userName: name, password: password)
        new StatusPost(statusText:firstStatus, ownerProfile: profile).save()
    }
}
