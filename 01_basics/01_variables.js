const accountId  = 144533
let accountEmail = " adi@xuv.com"
var accountPassword = "adit123"
accountCity = "pune" // we can declare variables like this but we shouldn't use this
let accountState // js will consider it as undefined


// accountId = 2 not allowed cant change const

accountEmail ="uvx@.com"
accountPassword = "133455"
accountCity = "Bengaluru"
// every variable can be update let and var but not in const

/*
about var and let 
var is older version where developers faced some issue in block scope and functional scope 
*/

console.log(accountEmail)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])