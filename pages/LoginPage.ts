
import { Locator , Page} from "@playwright/test"

export class LoginPage{

page: Page                 
email: Locator   
private password: Locator
private loginBtn: Locator
errorMessage: Locator
dashboardPageIdentifier: Locator

constructor (page:Page){
  this.page = page
  this.email = this.page.locator("#user_name")   
  this.password = this.page.getByPlaceholder("Enter Password")
  this.loginBtn = this.page.getByRole("button",{name:"Sign In"})
  this.errorMessage = this.page.locator('[class="ng-tns-c969959638-1 toast-message ng-star-inserted"]')
  this.dashboardPageIdentifier = this.page.locator('[class="marquee-heading desktop-title"]')

  }

     async launchURL (url:string) {

       await this.page.goto(url)

       }

       async LoginIntoApplication(username:string,password:string ) {

          await this.email.fill(username)
          await this.password.fill(password)
          await this.loginBtn.click()
          }

        }

  










    



