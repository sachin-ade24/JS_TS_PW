//Default parameters or default values of the function

function login1(username, password, role = 'admin'){
    console.log(username, ' | ', password, ' | ', role);
}
//When we do not supply arguement for default parameter, it takes default parameter's value i.e. admin
login1('abc@d.com', 'abcd@123');//abc@d.com  |  abcd@123  |  admin
//But if we override the 'role' and pass role as an arguement, it gives you the newly passed 'role' arguement i.e. QA
login1('abc@d.com', 'abcd@123', 'QA');//abc@d.com  |  abcd@123  |  QA

function login2(username, password, role = 'admin', status = 'active'){
    console.log(username, ' | ', password, ' | ', role, ' | ', status);
}
login2('Kiran', 'Kiran@123', 'inactive');//Kiran  |  Kiran@123  |  inactive  |  active --> This is wrong o/p

login2('Kirana', 'Kirana@123', 'admin', 'inactive');//Kirana  |  Kirana@123  |  admin  |  inactive

login2('Varana', 'Varana@123', login2.role, 'inactive');//Varana  |  Varana@123  |  admin  |  inactive
