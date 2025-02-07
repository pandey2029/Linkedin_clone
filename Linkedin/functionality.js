
function loadSkillData(){
    const skillData = JSON.parse(localStorage.getItem("skillData")) || [];
    const container = document.getElementById("skillContainer");
    container.innerHTML = "";
    skillData.forEach(entry=>{
        const skill = document.createElement("div");
        skill.classList.add("skill");
        skill.textContent=entry;
        container.append(skill);
    })
}
function loadAboutData(){
    let aboutData=JSON.parse(localStorage.getItem("aboutData")) || [];
    document.getElementById("aboutText").textContent=aboutData.aboutContent;
    let topSkillList=aboutData.topSkillList;
    let sz=document.getElementById("topSkillsContainer").querySelectorAll(".topSkill").length;
                console.log(topSkillList.length);
                console.log(sz);
                for(let i=sz;i<topSkillList.length;i++){
                    let topSkill=document.createElement("div");
                    topSkill.className="topSkill";
                    if(i==0){topSkill.textContent=`${topSkillList[i]}`}
                    else{
                    topSkill.textContent=`• ${topSkillList[i]}`}

                    document.getElementById("topSkillsContainer").append(topSkill);
                }


}
function loadPersonalData(){
    const personalData=JSON.parse(localStorage.getItem("personalData")) || [];
    
    document.getElementById("name").textContent=`${personalData.firstName} ${personalData.lastName}`;
    document.getElementById("headline").textContent=personalData.headline;
    document.getElementById("location").textContent=`${personalData.city}, ${personalData.country}`;


}
function loadEducationData() {
    const educationData = JSON.parse(localStorage.getItem("educationData")) || [];
    console.log(educationData);
    const container = document.getElementById("educationContentContainer");

    container.innerHTML = "";  // Clear existing entries

    educationData.forEach(entry => {
        const educationWrapper = document.createElement("div");
        educationWrapper.classList.add("educationWrapper");

        const instituteImg = document.createElement("img");
        instituteImg.classList.add("instituteImg");
        instituteImg.setAttribute("src", "https://media.licdn.com/dms/image/v2/D4D0BAQHn7jfCd8lURw/company-logo_100_100/company-logo_100_100/0/1686635689100/lnmiitjpr_logo?e=1745452800&v=beta&t=qBatTg8x4RGCBtAlWidhkXj_4yLIttonxlzXrBv0skg");
        instituteImg.setAttribute("alt", "Institute Logo");

        const educationContent = document.createElement("div");
        educationContent.classList.add("educationContent");

        const school = document.createElement("div");
        school.classList.add("school");
        school.textContent = entry.school;

        const degree = document.createElement("div");
        degree.classList.add("branch");
        degree.textContent = `${entry.branch}, ${entry.field}`

        

        const years = document.createElement("div");
        years.classList.add("year");
        let yearRange = "";

        if (entry.startMonth && entry.endMonth) {
       
        yearRange = `${entry.startMonth} ${entry.startYear} - ${entry.endMonth} ${entry.endYear}`;
        } else if (entry.startMonth) {
       
        yearRange = `${entry.startMonth} ${entry.startYear} - ${entry.endYear}`;
        } else if (entry.endMonth) {
       
        yearRange = `${entry.startYear} - ${entry.endMonth} ${entry.endYear}`;
        } else {
       
        yearRange = `${entry.startYear} - ${entry.endYear}`;
        }


        years.textContent = yearRange;      
        
       

        const grade = document.createElement("div");
        grade.classList.add("grade");
        grade.textContent = `Grade: ${entry.grade}`;

        educationContent.append(school, degree, years, grade);
        educationWrapper.append(instituteImg, educationContent);

        container.appendChild(educationWrapper);
    });
}
function loadExperienceData(){
    let experienceData = JSON.parse(localStorage.getItem("experienceData")) || [];
    // if(experienceData.length==0){
    //     document.getElementById("experience").style.display="none";
    // }
    // else{
    //     document.getElementById("experience").style.display="flex";
    // }
    
    // let experience=document.getElementById("experience");

    // let experienceHeader=document.createElement("div");
    // experienceHeader.id="experienceHeader";
    // experienceHeader.classList.add("sectionHeader");

    // let experienceHeaderLeft=document.createElement("div");
    // let experienceHeaderRight=document.createElement("div");
    // experienceHeaderLeft.id="experienceHeaderLeft";
    // experienceHeaderLeft.className="sectionHeader";
    // experienceHeaderRight.id="experienceHeaderRight";
    // experienceHeaderRight.className="sectionHeader";
    // experienceHeaderLeft.append("Experience");
    // let add=document.createElement("i");
    // let edit=document.createElement("i");
    // add.className="material-icons add";
    // add.id="addExperience";
    // edit.className="material-icons edit";
    // add.append("add");
    // edit.append("edit");
    // experienceHeaderRight.append(add,edit);
    // experienceHeader.append(experienceHeaderLeft,experienceHeaderRight);

    let experienceWrapper=document.getElementById("experienceWrapper");
    
    
    

    experienceData.forEach((arr) => {
        let company=arr.company;
        console.log(company);
        let details=arr.details;
        let experienceTab=document.getElementById(company);
        console.log(experienceTab);
        
        if(!experienceTab){
            let experienceTab=document.createElement("div");
            experienceTab.className="experienceTab";
            experienceTab.id=company;
            let experienceTabHeader=document.createElement("div");
            experienceTabHeader.className="experienceTabHeader";
            let companyImage=document.createElement("img");
            companyImage.className="companyImage";
            companyImage.src="https://media.licdn.com/dms/image/v2/C560BAQGB0W6_ixPclA/company-logo_100_100/company-logo_100_100/0/1630590775082/tekion_logo?e=1745452800&v=beta&t=bl_007bnYv7vo3BhlozrxwCxBJ-cGUSgePTHm8BH1LM";
            let companyAbout=document.createElement('div');
            companyAbout.className="companyAbout";
            let duration=document.createElement("div");
            duration.className="durtion";
            duration.append(details[details.length-1].empType)
            let companyName=document.createElement('div');
            companyName.className="company";
            companyName.append(company);
            companyAbout.append(companyName,duration);
            experienceTabHeader.append(companyImage,companyAbout);
            experienceTab.append(experienceTabHeader);
            let experienceDetailWrapper=document.createElement("div");
            experienceDetailWrapper.className="experienceDetailWrapper";

            console.log(details);

            details.forEach(detail=>{
                let experienceDetail=document.createElement("div");
                experienceDetail.className="experienceDetail";
                let role=document.createElement("div");
                role.className="role";
                let duration=document.createElement("div");
                duration.className="duration";
                let location=document.createElement("div");
                location.className="locaton";
                let roleSkills=document.createElement("div");
                roleSkills.className="roleSkills";

                role.append(detail.title);
                location.append(detail.location);
                let yearRange = "";

            if (detail.startMonth && detail.endMonth) {
       
                yearRange = `${detail.startMonth} ${detail.startYear} - ${detail.endMonth} ${detail.endYear}`;
            } else if (entry.startMonth) {
       
                yearRange = `${detail.startMonth} ${detail.startYear} - ${detail.endYear}`;
            } else if (entry.endMonth) {
       
                yearRange = `${detail.startYear} - ${detail.endMonth} ${detail.endYear}`;
            } else {
       
                yearRange = `${detail.startYear} - ${detail.endYear}`;
            }
                duration.append(yearRange);


                experienceDetail.append(role,duration,location);
                experienceDetailWrapper.append(experienceDetail);
            })
            
            experienceTab.append(experienceDetailWrapper);
            experienceWrapper.append(experienceTab);


        }
        else{
            
            let sz=experienceTab.querySelectorAll(".experienceDetail").length;
            //console.log(experienceTab.querySelector(".experienceTabHeader").querySelector(".duration"));
            // experienceTab.querySelector(".experienceTabHeader").querySelector(".duration").textContent=details[details.length-1].empType;
            
           
            
            for(let i=sz;i<details.length;i++)
            {
                
                let detail=details[i];
                let experienceDetail=document.createElement("div");
                experienceDetail.className="experienceDetail";
                let role=document.createElement("div");
                role.className="role";
                let duration=document.createElement("div");
                duration.className="duration";
                let location=document.createElement("div");
                location.className="locaton";
                let roleSkills=document.createElement("div");
                roleSkills.className="roleSkills";
                
                role.append(detail.title);
                location.append(detail.location);
                let yearRange = "";

            if (detail.startMonth && detail.endMonth) {
       
                yearRange = `${detail.startMonth} ${detail.startYear} - ${detail.endMonth} ${detail.endYear}`;
            } else if (entry.startMonth) {
       
                yearRange = `${detail.startMonth} ${detail.startYear} - ${detail.endYear}`;
            } else if (entry.endMonth) {
       
                yearRange = `${detail.startYear} - ${detail.endMonth} ${detail.endYear}`;
            } else {
       
                yearRange = `${detail.startYear} - ${detail.endYear}`;
            }
                duration.append(yearRange);


                experienceDetail.append(role,duration,location);
                console.log(experienceTab.querySelector(".experienceDetailWrapper"))
                experienceTab.querySelector(".experienceDetailWrapper").append(experienceDetail);

            }
            

            
            

        }
    })









}
document.addEventListener("DOMContentLoaded", () => {
    loadEducationData();  loadSkillData(); loadPersonalData(); loadExperienceData(); loadAboutData();
});

document.getElementById("addProfile").addEventListener("click", function () {
    fetch('addToProfile.html')
        .then(response => response.text())
        .then(data => {
            let addModal = document.getElementById("addModal");
            addModal.innerHTML = data;

           
            document.getElementById("addEdu").addEventListener("click", function () {
                
                fetch("addEducation.html")
                    .then(response => response.text())
                    .then(data => {
                        addModal.innerHTML = data;

                        // Close modal logic
                        const closeBtn = document.getElementById('quit');
                        closeBtn.addEventListener("click", function () {
                            addModal.innerHTML = "";
                        });

                        window.addEventListener("click", function (event) {
                            if (event.target === document.getElementById('modal')) {
                                addModal.innerHTML = "";
                            }
                        });
                        
                        
                       
                        document.getElementById("educationDetails").addEventListener("submit", function (event) {
                            event.preventDefault();  

                            
                            const school = document.getElementById("school").value;
                            const degree = document.getElementById("degree").value;
                            const field = document.getElementById("field").value;
                            const startYear = document.getElementById("startYear").value;
                            const endYear = document.getElementById("endYear").value;
                            const startMonth = document.getElementById("startMonth").value;
                            const endMonth = document.getElementById("endMonth").value;
                            const grade = document.getElementById("grade").value;
                            const activity = document.getElementById("activity").value;
                            const description = document.getElementById("description").value;

                            
                            if (!school || !degree || !field || !startYear || !endYear) {
                                alert("Please fill in all required fields.");
                                return;  
                            }

                           
                            let educationData = JSON.parse(localStorage.getItem("educationData")) || [];

                            educationData.push({
                                school,
                                degree,
                                field,
                                startYear,
                                endYear,
                                startMonth,
                                endMonth,
                                grade,
                                activity,
                                description
                            });

                            
                            localStorage.setItem("educationData", JSON.stringify(educationData));

                            
                            document.getElementById("educationDetails").reset();
                           

                            
                            loadEducationData();

                            addModal.innerHTML="";
                        });

                       
                       
                        // document.addEventListener("DOMContentLoaded", loadEducationData);

                    })
                    .catch(err => console.error("Error loading modal:", err));
            });
            const closeBtn = document.getElementById('quit');
                 closeBtn.addEventListener("click", function () {
                            addModal.innerHTML = "";
                        });

             window.addEventListener("click", function (event) {
                if (event.target === document.getElementById('modal')) {
                       addModal.innerHTML = "";
                     }
                 });


        })
        .catch(err => console.error("Error loading modal:", err));
});



document.getElementById("addSkillBtn").addEventListener("click",function(){
    fetch("addSkill.html")
    .then(response => response.text())
    .then(data => {
            let addModal = document.getElementById("addModal");
            addModal.innerHTML = data;

            const closeBtn = document.getElementById('quit');
            closeBtn.addEventListener("click", function () {
                            addModal.innerHTML = "";
            });

            window.addEventListener("click", function (event) {
            if (event.target === document.getElementById('modal')) {
                 addModal.innerHTML = "";
                    }
            });

            document.getElementById("save").addEventListener("click",function(){
                const skill = document.getElementById("skill").value;

                if (!skill) {
                    alert("Please fill in all required fields.");
                    return; 
                }
                let skillData = JSON.parse(localStorage.getItem("skillData")) || [];
                skillData.push(skill);

                localStorage.setItem("skillData", JSON.stringify(skillData));

                            
                loadSkillData();

                addModal.innerHTML="";


            })






    })
    .catch(err => console.error("Error loading modal:", err));
});

/////////////////////////

document.getElementById("editIntroBtn").addEventListener("click",function(){
    
    fetch("editIntro.html")
    .then(response => response.text())
    .then(data => {
            
            let addModal = document.getElementById("addModal");
            addModal.innerHTML = data;

            const closeBtn = document.getElementById('quit');
            closeBtn.addEventListener("click", function () {
                            addModal.innerHTML = "";
            });

            window.addEventListener("click", function (event) {
            if (event.target === document.getElementById('modal')) {
                 addModal.innerHTML = "";
                    }
            });

            document.getElementById("personalDetails").addEventListener("submit",function(event){
                event.preventDefault();  

                
                let firstName = document.getElementById("firstName").value;
                let lastName = document.getElementById("lastName").value;
                let addName = document.getElementById("addName").value;
                let pronoun = document.getElementById("pronoun").value;
                let headline = document.getElementById("headlineInput").value;
                let industry = document.getElementById("industry").value;
                let country = document.getElementById("country").value;
                let city = document.getElementById("city").value;
                
                console.log("Headline:", headline); 

                let personalData = JSON.parse(localStorage.getItem("personalData")) || [];

                personalData={
                                firstName,
                                lastName,
                                addName,
                                pronoun,
                                headline,
                                industry,
                                country,
                                city
                };

                localStorage.setItem("personalData", JSON.stringify(personalData));

                            
                document.getElementById("personalDetails").reset();
                document.getElementById("name").textContent=`${firstName} ${lastName}`;
                document.getElementById("headline").textContent=`${headline}`;
                document.getElementById("location").textContent=`${city}, ${country}`;
                            
                

                addModal.innerHTML="";
            })
    })
    .catch(err => console.error("Error loading modal:", err));
});


////////////////////////


document.getElementById("aboutBtn").addEventListener("click",function(){
    
    fetch("editabout.html")
    .then(response => response.text())
    .then(data => {
            
            let addModal = document.getElementById("addModal");
            addModal.innerHTML = data;

            const closeBtn = document.getElementById('quit');
            closeBtn.addEventListener("click", function () {
                            addModal.innerHTML = "";
            });

            window.addEventListener("click", function (event) {
            if (event.target === document.getElementById('modal')) {
                 addModal.innerHTML = "";
                    }
            });

            let aboutData = JSON.parse(localStorage.getItem("aboutData")) || {};
            let topSkillList=aboutData.topSkillList || [];
            topSkillList.forEach((skill)=>{
                const skillSet = document.createElement("div");
                        skillSet.classList.add("skillSet");
                        const left=document.createElement("div");
                        left.classList.add("left");
                        const right=document.createElement("div");
                        right.classList.add("right");
                        const close=document.createElement("i");
                        close.classList.add("material-icons");
                        close.classList.add("close");
                        close.textContent="close"
                        const skillName=document.createElement("div");
                        skillName.classList.add("skillName");
                        const menu=document.createElement("i");
                        menu.classList.add("material-icons");
                        menu.classList.add("move");
                        menu.textContent="menu"
                        skillName.textContent=skill;
                        left.append(close,skillName);
                        right.append(menu);
                        skillSet.append(left,right);
                        let topSkills=document.getElementById("topSkills");
                        topSkills.append(skillSet);
            })
            document.getElementById("content").append(aboutData.aboutContent);


            document.getElementById("addTopSkill").addEventListener("click", function() {
                this.style.display="none";
                const inputBox = document.createElement("input");
                inputBox.type = "text";
                inputBox.placeholder = "Skill";
                inputBox.id = "newSkill";
               
                function saveSkill() {
                    const skill = inputBox.value;
                    if (skill) {
                        
                        topSkillList.push(skill);
                        const skillSet = document.createElement("div");
                        skillSet.classList.add("skillSet");
                        const left=document.createElement("div");
                        left.classList.add("left");
                        const right=document.createElement("div");
                        right.classList.add("right");
                        const close=document.createElement("i");
                        close.classList.add("material-icons");
                        close.classList.add("close");
                        close.textContent="close"
                        const skillName=document.createElement("div");
                        skillName.classList.add("skillName");
                        const menu=document.createElement("i");
                        menu.classList.add("material-icons");
                        menu.classList.add("move");
                        menu.textContent="menu"
                        skillName.textContent=skill;
                        left.append(remove,skillName);
                        right.append(menu);
                        skillSet.append(left,right);
                        let topSkills=document.getElementById("topSkills");
                        topSkills.append(skillSet);
                        console.log(topSkills)

                        inputBox.value = ""; 
                        inputBox.style.display="none";
                        document.getElementById("addTopSkill").style.display="flex";
                    } else {
                        console.log("Please enter a skill");
                    }
                }
                
                
                
                
                    
                inputBox.addEventListener("keydown", function(event) {
                    if (event.key === "Enter") {  
                        saveSkill();  
                    }
                    
                    
                });
                
                   
                const skillInputContainer = document.getElementById("topSkillInputContainer");
                skillInputContainer.innerHTML = "";  
                skillInputContainer.appendChild(inputBox);
                
            });





            document.getElementById("save").addEventListener("click",function(event){
                event.preventDefault();  

                
                let aboutContent = document.getElementById("content").value;
                
                
                console.log("Headline:", headline); 
                


                
              
                

                aboutData={
                    aboutContent,
                    topSkillList
                }


                

                localStorage.setItem("aboutData", JSON.stringify(aboutData));

                            
                
                loadAboutData();


                
                
                            
                

                addModal.innerHTML="";
            })

            document.querySelector(".remove").addEventListener("click",function(event){
                let parent=event.target.parentElement.parentElement;
                console.log(parent);
            })





    })
    .catch(err => console.error("Error loading modal:", err));
});


//////////////



const buttons = document.querySelectorAll('.activityButton');
const divs = document.querySelectorAll('.contentDiv');

function hideAllDivs() {
    divs.forEach(div => {
        div.style.display = 'none';
    });
}

function removeActiveClass() {
    buttons.forEach(button => {
        button.classList.remove('activityButtonActive');
    });
}

buttons.forEach(button => {
    button.addEventListener('click', function () {
        removeActiveClass();
        button.classList.add('activityButtonActive');
        hideAllDivs();

        const targetDivId = button.getAttribute('data-target');
        const targetDiv = document.getElementById(targetDivId);
        if (targetDivId == 'posts') {
            targetDiv.style.display = 'flex';
        } else if (targetDivId == 'comments') {
            targetDiv.style.display = 'block';
        } else {
            targetDiv.style.display = 'grid';
        }
    });
});




const sideBarBtns = document.querySelectorAll('.sideBarBtn');
sideBarBtns.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('targetDiv');
        const targetDiv = document.getElementById(targetId);
        
            targetDiv.scrollIntoView({
                behavior: 'smooth', 
                block: 'center'      
            });
        
    });
});



document.getElementById("addExperience").onclick=()=>{
    const formBuilder = new ConcreteFormBuilder()

    const addExperience = formBuilder
        .addTextField("Ex:Sales Manager","Title","title",0)
        .addDropdownField("", ["Please select","Full-time","Part-time","Internship"],"Employment type","empType",0)
        .addTextField("Ex:Tekion","Company or Organization","company",0)
        .addDropdownField("", ["Month","Jan","Feb","Mar","Apr"],"Start date","startMonth",0)
        .addDropdownField("", ["Year","2020","2021","2022","2022"],"","startYear",1)
        .addDropdownField("", ["Month","Jan","Feb","Mar","Apr"],"End date","endMonth",0)
        .addDropdownField("", ["Year","2020","2021","2022","2022"],"","endYear",1)
        .addTextField("Ex:London, UK","Location","location",0)
        .addDropdownField("", ["Please select","On-site","Hybrid","Remote"],"Location type","locationType",0)
        .addTextArea("List major duties and success, highlighting specific projects","Description","description",0)
        .addTextField("Headline","Profile Headline","headline",0)
        .getForm()

        addExperience.setRowLayout(new Map([["title",1], ["empType", 2], ["company", 3], ["startMonth", 4], ["startYear", 4], ["endMonth", 5], ["endYear", 5]
            , ["location", 6], ["locationType", 7], ["description", 8],["headline",9]
        ]))
        let modal=document.createElement("div");
        let tab=document.createElement("div");
        modal.id="modal";
        tab.id="tab";
        modal.append(tab);
        
        
        let headerWrapper=document.createElement("div");
        headerWrapper.id="headerWrapper";
        let header=document.createElement("div");
        header.id="header";
        header.append("Add experience");
        let quit=document.createElement("button");
        quit.id="quit";
        let close=document.createElement("i");
        close.className="material-icons";
        close.append("close");
        quit.append(close);
        headerWrapper.append(header,quit);
        tab.append(headerWrapper);

        document.getElementById("addModal").append(modal);
        addExperience.render("tab");

        // <div id="footer">
        //             <button id="save" type="submit">Save</button>
        // </div>

        
        
        document.getElementById("row4").classList.add("modalSelect");
        document.getElementById("row5").classList.add("modalSelect");
        



        const closeBtn = document.getElementById('quit');
        closeBtn.addEventListener("click", function () {
                addModal.innerHTML = "";
        });

        window.addEventListener("click", function (event) {
            if (event.target === document.getElementById('modal')) {
                        addModal.innerHTML = "";
                }
        });

        console.log(document.getElementById("saveExp"));
        // document.getElementById("").addEventListener("submit",function(event){
        //     event.preventDefault();
        //     console.log("finally");
        // })
        document.querySelector("#tab form").onsubmit=(event)=>{
            console.log("here");
            event.preventDefault();

            let title=document.querySelector("#title input").value;
            
            let empType=document.querySelector("#empType select").value;
            let company=document.querySelector("#company input").value;
            let startMonth=document.querySelector("#startMonth select").value;
            let startYear=document.querySelector("#startYear select").value;
            let endMonth=document.querySelector("#endMonth select").value;
            let endYear=document.querySelector("#endYear select").value;
            let location=document.querySelector("#location input").value;
            let locationType=document.querySelector("#locationType select").value;
            let description=document.querySelector("#description textarea").value;
            let headline=document.querySelector("#headline input").value;

            let experienceData=JSON.parse(localStorage.getItem("experienceData")) || [];
            let alreadypresent=false;
            for(let i=0;i<experienceData.length;i++){
                if(experienceData[i].company===company){
                    experienceData[i].details.push({
                    title,
                    empType,
                    startMonth,
                    startYear,
                    endMonth,
                    endYear,
                    location,
                    locationType,
                    description,
                    headline
                    })
                    alreadypresent=true;
                    break;
                }
            }
            
            
            if(!alreadypresent){
                let details=[{
                    title,
                    empType,
                    startMonth,
                    startYear,
                    endMonth,
                    endYear,
                    location,
                    locationType,
                    description,
                    headline
                }];
                experienceData.push({company,details});
                
            }
            alreadypresent=false;
            
            localStorage.setItem("experienceData",JSON.stringify(experienceData));
            document.querySelector("#tab form").reset();
            
            loadExperienceData();
            addModal.innerHTML="";
            

        }





}





/////////////////////

class FormCreation {
    create() {
      throw new Error("create() method must be implemented.")
    }
  }

  class TextBoxCreation extends FormCreation {
    create(field) {
        let labelElement = document.createElement("label")
        let fieldElement = document.createElement("input")
        fieldElement.type ="text"
        fieldElement.placeholder = field.placeholder
        labelElement.append(field.label);
        labelElement.append(fieldElement);
        labelElement.id=field.id;
        labelElement.style.order=field.order;
        return labelElement
    }
  }
  class SelectBoxCreation extends FormCreation {
    create(field) {
        let labelElement = document.createElement("label")
        let fieldElement = document.createElement("select")
        field.options.forEach((option) => {
          const optionElement = document.createElement("option")
          optionElement.value = option
          optionElement.text = option
          fieldElement.appendChild(optionElement)
        })
        labelElement.append(field.label);
        labelElement.append(fieldElement);
        labelElement.id=field.id;
        labelElement.style.order=field.order;
        return labelElement;
    }
  }
  class TextAreaBoxCreation extends FormCreation {
    create(field) {
        let labelElement = document.createElement("label")
        let fieldElement = document.createElement("textarea")
          fieldElement.placeholder = field.placeholder
          labelElement.append(field.label);
          labelElement.append(fieldElement);
          labelElement.id=field.id;
          labelElement.style.order=field.order;
          return labelElement;
     
    } 
  }
  class CheckBoxCreation extends FormCreation {
    create(field) {
        let labelElement = document.createElement("label")
        let fieldElement = document.createElement("input")
        fieldElement.type = "checkbox"
        labelElement.append(field.label);
        labelElement.append(fieldElement);
        labelElement.id=field.id;
        labelElement.style.order=field.order;
        return labelElement;
    } 
  }
  
  class FunctionMapper {
    constructor() {
      this.inputMethods = new Map()
    }
    setType(type, creator) {
      this.inputMethods.set(type, creator)
    }
    createInputBox(field, type) {
      if (!this.inputMethods.has(type)) {
        return "Invalid input type."
      }
      return this.inputMethods.get(type).create(field)
    }
  }
  
  let functionMapper=new FunctionMapper();
  functionMapper.setType("input",new TextBoxCreation());
  functionMapper.setType("select",new SelectBoxCreation());
  functionMapper.setType("textarea",new TextAreaBoxCreation());
  functionMapper.setType("checkbox",new CheckBoxCreation());






/////////////////////


class FormBuilder {
    addTextField(placeholder,label) {
      /* abstract */
    }
    addDropdownField(placeholder, options,label) {
      /* abstract */
    }
    addCheckboxField(placeholder,label) {
      /* abstract */
    }
    addTextArea(placeholder,label){
        /* abstract */
    }
    getForm() {
      /* abstract */
    }
  }
  
  class ConcreteFormBuilder extends FormBuilder {
    constructor() {
      super()
      this.form = new Form()
    }
  
    addTextField(placeholder,label,id,order) {
      this.form.addField({ type: "input", placeholder,label,id,order})
      return this
    }
  
    addDropdownField(placeholder, options,label,id,order) {
      this.form.addField({ type: "select", placeholder, options,label,id,order})
      return this
    }
    addTextArea(placeholder,label,id,order){
      this.form.addField({ type: "textarea", placeholder,label,id,order})
      return this
    }
    addCheckboxField(placeholder,label,id,order) {
      this.form.addField({
        type: "checkbox",
        placeholder,
        label,id,order
      })
      return this
    }
  
    getForm() {
      return this.form
    }
  }
  
  class Form {
    constructor() {
      this.fields = [];
      this.rowLayout = new Map();
    }
    addField(field) {
      this.fields.push(field)
    }
    setRowLayout(layoutMap) {
        this.rowLayout = layoutMap; 
    }
  
    render(location) {
      const formElement = document.createElement("form")
      let index=0;
      this.fields.forEach((field)=>{
        let row=formElement.querySelector(`#row${this.rowLayout.get(field.id)}`);
        
        let labelElement
        labelElement=functionMapper.createInputBox(field,field.type)
        
        if(row){
            row.append(labelElement);
        }
        else{
            row=document.createElement("div");
            row.id=`row${this.rowLayout.get(field.id)}`;
            row.style.order=this.rowLayout.get(field.id);
            row.append(labelElement);
            
        }


        
            
            
            
  
        // if (field.type === "select") {
          
        // } 
        // else if (field.type === "checkbox") {
          
        // } 
        // else if(field.type==="textarea"){
          
        // }
        // else {
          
        // }
  
        

        
        formElement.append(row);
      })
      let footer=document.createElement("div");
        footer.id="footer";
        let save=document.createElement("button");
        save.id="saveExp";
        save.type="submit"
        save.append("save")
        footer.append(save);
      formElement.append(footer);
      document.querySelector(`#${location}`).append(formElement)
    }
  }
  
  
 
  