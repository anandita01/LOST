function signIn(){
  let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth"
  let form = document.createElement('form')
  form.setAttribute('method','GET') 
  form. setAttribute ('action',oauth2Endpoint)

let params =
  {
"client_id":"253672523567-003me30j5jt4cpcd9anlppd1qggglnvl.apps.googleusercontent.com",
"redirect_uri":"https://a0d94f62-ebe2-49aa-83cb-003e48e35e6f-00-2rwlyecddf8j.pike.replit.dev/lost.html",
"response_type":"token",
"scope": "https://www.googleapis.com/auth/userinfo.profile", 
"include_granted_scopes":'true',
"state":'pass-through-value'
  
  
  }
  for(var p in params){
    let input = document.createElement('input')
    input.setAttribute('type','hidden')
    input.setAttribute('name',p)
    input.setAttribute('value',params[p])
    form.appendChild(input)
  }
  document.body.appendChild(form)
  form.submit()
}