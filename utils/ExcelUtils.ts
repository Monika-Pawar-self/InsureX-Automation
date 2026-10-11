import xlsx from 'xlsx'

export class ExcelUtils {

   static getExcelData(filePath:string, sheetName:string){ 
   try {   

    const wb = xlsx.readFile(filePath)  

    const sheet = wb.Sheets[sheetName]  
    

    const data = xlsx.utils.sheet_to_json(sheet)
    return data

  
   }
    catch(error) {   
       console.log(error);   
       
     }

  }

   }   
   
   const data = ExcelUtils.getExcelData("D:/Playrwright Automation/Playwright Projects/InsureX/testdata/LoginData.xlsx", "Login")
   console.log(data);

