import { test , expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage" 
import { ExcelUtils } from "../utils/ExcelUtils";

let data: any
try{

 data = ExcelUtils.getExcelData("D:/Playrwright Automation/Playwright Projects/InsureX/testdata/LoginData.xlsx","Login")
}
catch(e){
    console.log(e)
}

test.setTimeout(120000)

   let lp: LoginPage    

 test.beforeEach(async({page}) =>{        
   lp = new LoginPage(page)
   await lp.launchURL(data[0].url)  

 })

test("Test login with incorrect credentials", async ()=> {
   await lp.LoginIntoApplication(data[0].username, data[0].password)  
   //await expect(lp.errorMessage).toHaveText(data[0].errormessage)  
})