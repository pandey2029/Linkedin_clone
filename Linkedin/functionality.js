
function loadSkillData(){
    const skillData = JSON.parse(localStorage.getItem("skillData")) || [];
    if(skillData.length==0){
        document.getElementById("skills").style.display="none";
        return;
    }
    const container = document.getElementById("skillContainer");
    container.innerHTML = "";
    let count=0;
    skillData.forEach(entry=>{

        const skill = document.createElement("div");
        skill.classList.add("skill");
        skill.textContent=entry;
        if(count>=2){
            skill.style.display="none";
        }
        container.append(skill);
        count++;
    })
}
function exit(){
    const closeBtn = document.getElementById('quit');
        closeBtn.addEventListener("click", function () {
                addModal.innerHTML = "";
        });

        window.addEventListener("click", function (event) {
            if (event.target === document.getElementById('modal')) {
                        addModal.innerHTML = "";
                }
        });
}
function loadAboutData(){
    let aboutData=JSON.parse(localStorage.getItem("aboutData")) || [];
    if(aboutData.length==0){
        document.getElementById("about").style.display="none"
        return;
    }
    document.getElementById("aboutText").textContent=aboutData.aboutContent;
    let topSkillList=aboutData.topSkillList;
    let sz=document.getElementById("topSkillsContainer").querySelectorAll(".topSkill").length;
                console.log(topSkillList.length);
                console.log(sz);
                document.getElementById("topSkillsContainer").innerHTML="";
                for(let i=0;i<topSkillList.length;i++){
                    let topSkill=document.createElement("div");
                    topSkill.className="topSkill";
                    if(i==0){topSkill.textContent=`${topSkillList[i]}`}
                    else{
                    topSkill.textContent=`• ${topSkillList[i]}`}

                    document.getElementById("topSkillsContainer").append(topSkill);
                }


}
function loadPersonalData(){
    const personalData=JSON.parse(localStorage.getItem("introData")) || [];
    console.log(document.getElementById("name"));
    document.getElementById("name").textContent=`${personalData.firstName} ${personalData.lastName}`;
    document.getElementById("headline").textContent=personalData.headline;
    document.getElementById("location").textContent=`${personalData.city}, ${personalData.country}`;
    let companyImageMap=new Map();
    companyImageMap.set("Tekion Corp","https://media.licdn.com/dms/image/v2/C560BAQGB0W6_ixPclA/company-logo_100_100/company-logo_100_100/0/1630590775082/tekion_logo?e=1745452800&v=beta&t=bl_007bnYv7vo3BhlozrxwCxBJ-cGUSgePTHm8BH1LM")
    companyImageMap.set("The LNM Institute of Information Technology","https://media.licdn.com/dms/image/v2/D4D0BAQHn7jfCd8lURw/company-logo_100_100/company-logo_100_100/0/1686635689100/lnmiitjpr_logo?e=1745452800&v=beta&t=qBatTg8x4RGCBtAlWidhkXj_4yLIttonxlzXrBv0skg")
    let experience=document.querySelectorAll(".experience");
    if(personalData.currentPosition){
        experience[0].classList.add("visible");
        document.getElementById("experienceCompanyName").textContent=personalData.currentPosition;
        document.getElementById("experienceCompanyImg").src=companyImageMap.get(personalData.currentPosition);
    }
    if(personalData.school){
        experience[1].classList.add("visible");
        document.getElementById("experienceSchoolName").textContent=personalData.school;
        document.getElementById("experienceSchoolImg").src=companyImageMap.get(personalData.school);
    }


}
function loadEducationData() {
    const educationData = JSON.parse(localStorage.getItem("educationData")) || [];
    if(educationData.length==0){
        document.getElementById("education").style.display="none";
        return;
    }
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
        degree.textContent = `${entry.degree}, ${entry.field}`

        

        const years = document.createElement("div");
        years.classList.add("year");
        let yearRange = "";

        if (entry.startMonth!="Month" && entry.endMonth!="Month") {
       
        yearRange = `${entry.startMonth} ${entry.startYear} - ${entry.endMonth} ${entry.endYear}`;
        } else if (entry.startMonth!="Month") {
       
        yearRange = `${entry.startMonth} ${entry.startYear} - ${entry.endYear}`;
        } else if (entry.endMonth!="Month") {
       
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
    //     return;
    // }

    
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
                detail.topSkillList.forEach((skill)=>{
                    if(roleSkills.textContent===""){
                        roleSkills.append(skill);
                    }
                    else{
                        roleSkills.append(` • ${skill}`);
                    }
                })

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


                experienceDetail.append(role,duration,location,roleSkills);
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
                detail.topSkillList.forEach((skill)=>{
                    if(roleSkills.textContent===""){
                        roleSkills.append(skill);
                    }
                    else{
                        roleSkills.append(` • ${skill}`);
                    }
                })

            if (detail.startMonth!="Month" && detail.endMonth!="Month") {
       
                yearRange = `${detail.startMonth} ${detail.startYear} - ${detail.endMonth} ${detail.endYear}`;
            } else if (entry.startMonth!="Month") {
       
                yearRange = `${detail.startMonth} ${detail.startYear} - ${detail.endYear}`;
            } else if (entry.endMonth!="Month") {
       
                yearRange = `${detail.startYear} - ${detail.endMonth} ${detail.endYear}`;
            } else {
       
                yearRange = `${detail.startYear} - ${detail.endYear}`;
            }
                duration.append(yearRange);


                experienceDetail.append(role,duration,location,roleSkills);
                console.log(experienceTab.querySelector(".experienceDetailWrapper"))
                experienceTab.querySelector(".experienceDetailWrapper").append(experienceDetail);

            }
            

            
            

        }
    })

}


function loadImg(){
    let imgURL=JSON.parse(localStorage.getItem("imgURL")) || "/images/defaultPhoto.png";
    document.getElementById("profileImg").src=imgURL
}
document.addEventListener("DOMContentLoaded", () => {
    loadEducationData();  loadSkillData(); loadPersonalData(); loadExperienceData(); loadAboutData(); loadImg();
});

function about(){
    let modal=document.createElement("div");
        let tab=document.createElement("div");
        modal.id="modal";
        tab.id="tab";
        modal.append(tab);
        
        
        let headerWrapper=document.createElement("div");
        headerWrapper.id="headerWrapper";
        let header=document.createElement("div");
        header.id="header";
        header.append("Edit About");
        let quit=document.createElement("button");
        quit.id="quit";
        let close=document.createElement("i");
        close.className="material-icons";
        close.append("close");
        quit.append(close);
        headerWrapper.append(header,quit);
        tab.append(headerWrapper);


        let editWindow = document.createElement("div");
        editWindow.id = "editWindow";

        let description = document.createElement("p");
        description.id = "description";
        description.textContent = "You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.";

        let textarea = document.createElement("textarea");
        textarea.id = "content";
        textarea.placeholder = "Add about yourself here.";

        let wordCount = document.createElement("div");
        wordCount.id = "wordCount";
        wordCount.textContent = "0/2000";

        editWindow.append(description, textarea, wordCount);



        let skills=document.createElement("div");
        skills.id="skills";
        let h3=document.createElement("h3");
        let p=document.createElement("p");
        h3.append("Skills");
        p.append("Show your top skills — add up to 5 skills you want to be known for. They will also appear in your Skills section.")
        let topSkills=document.createElement("div");
        topSkills.id="topSkills";
        let addTopSkill=document.createElement("button");
        addTopSkill.id="addTopSkill";
        let add=document.createElement("i");
        add.className="material-icons add";
        add.append("add");
        addTopSkill.append(add,"Add skill");
        let topSkillInputContainer=document.createElement("div");
        topSkillInputContainer.id="topSkillInputContainer";
        skills.append(h3,p,topSkills,addTopSkill,topSkillInputContainer);
        tab.append(editWindow,skills)
        let footer = document.createElement("div");
        footer.id = "footer";
        let saveButton = document.createElement("button");
        saveButton.id = "save";
        saveButton.textContent = "Save";
        footer.appendChild(saveButton);
        tab.append(footer);




        document.getElementById("addModal").append(modal);
        document.getElementById("skills").style.padding="1.5rem";

        exit();

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
                    left.append(close,skillName);
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

        document.getElementById("topSkills").addEventListener("click",function(event){
            console.log("delete");
            if(event.target.className==='material-icons close'){
            let parent=event.target.parentElement.parentElement;
            let skillName=parent.querySelector(".skillName");
           
            topSkillList=topSkillList.filter(skill=>skill!==skillName.textContent);
            console.log(skillName);
            
            
            parent.remove();
            }
            
            
        })





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



}

function skill(){
    let modal=document.createElement("div");
    let tab=document.createElement("div");
    modal.id="modal";
    tab.id="tab";
    modal.append(tab);

    let headerWrapper=document.createElement("div");
        headerWrapper.id="headerWrapper";
        let header=document.createElement("div");
        header.id="header";
        header.append("Add skills");
        let quit=document.createElement("button");
        quit.id="quit";
        let close=document.createElement("i");
        close.className="material-icons";
        close.append("close");
        quit.append(close);
        headerWrapper.append(header,quit);
        tab.append(headerWrapper);

    let formElement=document.createElement("div");
    formElement.id="formElement"
    let labelElement = document.createElement("label")
        let fieldElement = document.createElement("input")
        fieldElement.type ="text"
        fieldElement.placeholder = "Skill(Ex:Project Management)"
        labelElement.append("Skill");
        labelElement.append(fieldElement);
        labelElement.id="skill";
    formElement.append(labelElement);
    
    

    let footer=document.createElement("div");
        footer.id="footer";
        let save=document.createElement("button");
        save.id="save";
        save.type="submit"
        save.append("save")
        footer.append(save);
        let topSkills=document.createElement("div");
        topSkills.id="topSkills";
        formElement.append(topSkills);
      formElement.append(footer);

      

      let skillData=JSON.parse(localStorage.getItem("skillData"))||[];
      let topSkillsArray=[];
      skillData.forEach((skill)=>{
        const skillSet = document.createElement("div");
        skillSet.classList.add("skillSet");
        skillSet.draggable="true";
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
        topSkillsArray.push(skillSet);
    })
   
    topSkills.append(...topSkillsArray);

    tab.append(formElement);
      
      let addModal=document.getElementById("addModal");
      addModal.append(modal);

      exit();

    let inputBox=document.querySelector("#skill input");

    function saveSkill() {
        const skill = inputBox.value;
        if (skill) {
            
            skillData.push(skill);
            const skillSet = document.createElement("div");
            skillSet.classList.add("skillSet");
            skillSet.classList.add("dropTarget");
            skillSet.draggable="true";
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
            console.log(topSkills)

            inputBox.value = ""; 
            
            
        } else {
            console.log("Please enter a skill");
        }
    }
    inputBox.addEventListener("keydown", function(event) {
        
        if (event.key === "Enter") {  
            saveSkill();  
        }
        
        
    });
    let dragged = null;

    document.getElementById("topSkills").addEventListener("dragstart", (event) => {
        if (event.target.classList.contains("skillSet")) {
            dragged = event.target;
          
            
        }
    });
    
    document.getElementById("topSkills").addEventListener("dragover", (event) => {
        event.preventDefault(); 
    });
    
    document.getElementById("topSkills").addEventListener("drop", (event) => {
        event.preventDefault();
    
        if (dragged && dragged !== event.target && event.target.classList.contains("skillSet")) {
            let parent = document.getElementById("topSkills");
    
            
            let targetMiddleY = event.target.offsetTop + event.target.offsetHeight / 2;
    
           
            if (event.clientY < targetMiddleY) {
                
                parent.insertBefore(dragged, event.target);
            } else {
                
                if (event.target.nextElementSibling) {
                    parent.insertBefore(dragged, event.target.nextElementSibling);
                } else {
                    parent.appendChild(dragged);
                }
            }
        }
    
       
        if (dragged) {
            
            dragged = null; 
        }
    });
    


    


    document.getElementById("topSkills").addEventListener("click",function(event){
        console.log("delete");
        if(event.target.className==='material-icons close'){
        let parent=event.target.parentElement.parentElement;
        let skillName=parent.querySelector(".skillName");
       
        skillData=skillData.filter(skill=>skill!==skillName.textContent);
        console.log(skillName);
        
        
        parent.remove();
        }
        
        
    })

    document.getElementById("save").addEventListener("click",function(event){
        event.preventDefault();  
        localStorage.setItem("skillData", JSON.stringify(skillData));
        loadSkillData();
        addModal.innerHTML="";
    })
}
function education(){
    const formBuilder = new ConcreteFormBuilder()

    const addEducation = formBuilder
    .addTextField("Ex:Boston University","School","school",0)
    .addTextField("Ex:Bachelor's","Degree","degree",0)
    .addTextField("Ex:Busisness","Field","field",0)
    .addDropdownField("", ["Month","Jan","Feb","Mar","Apr","May","June","July","August","Sep","Oct","Nov","Dec"],"Start date","startMonth",0)
    .addDropdownField("", ["Year","2017","2018","2019","2020","2021","2022","2023","2024","2025"],"","startYear",1)
    .addDropdownField("", ["Month","Jan","Feb","Mar","Apr","May","June","July","August","Sep","Oct","Nov","Dec"],"End date","endMonth",0)
    .addDropdownField("", ["Year","2017","2018","2019","2020","2021","2022","2023","2024","2025"],"","endYear",1)
    .addTextField("","Grade","grade",0)
    .addTextArea("Ex:Alpha Phi Omega,Volleyball","Activities and societies","activity",0)
    .addTextArea("","Description","description",0)
    .getForm()

    addEducation.setRowLayout(new Map([["school",1], ["degree", 2], ["field", 3], ["startMonth", 4], ["startYear", 4], ["endMonth", 5], ["endYear", 5]
        , ["grade", 6], ["activity", 7], ["description", 8]
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
    header.append("Add education");
    let quit=document.createElement("button");
    quit.id="quit";
    let close=document.createElement("i");
    close.className="material-icons";
    close.append("close");
    quit.append(close);
    headerWrapper.append(header,quit);
    tab.append(headerWrapper);
    addModal.innerHTML="";
    addModal.append(modal);
    addEducation.render("tab");
    
    document.getElementById("row4").classList.add("modalSelect");
    document.getElementById("row5").classList.add("modalSelect");


    exit();

    document.querySelector("#tab form").onsubmit=(event)=>{
        console.log("here");
        event.preventDefault();

        let school=document.querySelector("#school input").value;
        let degree=document.querySelector("#degree input").value;
        let field=document.querySelector("#field input").value;
        let startMonth=document.querySelector("#startMonth select").value;
        let startYear=document.querySelector("#startYear select").value;
        let endMonth=document.querySelector("#endMonth select").value;
        let endYear=document.querySelector("#endYear select").value;
        let grade=document.querySelector("#grade input").value;
        let activity=document.querySelector("#activity textarea").value;
        let description=document.querySelector("#description textarea").value;
        
        if (!school || !degree || !field || startYear==="Year" || endYear==="Year") {
                    alert("Please fill in all required fields.");
                    return;  
                }

        let educationData=JSON.parse(localStorage.getItem("educationData")) || [];
        
        educationData.push({
            school,
            degree,
            field,
            startMonth,
            startYear,
            endMonth,
            endYear,
            grade,
            description,
            activity

        })
        
        
        
        
        localStorage.setItem("educationData",JSON.stringify(educationData));
        document.querySelector("#tab form").reset();
        
        loadEducationData();
        addModal.innerHTML="";

        
        

    }
}
function experience(){
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
        
        

        // <div id="footer">
        //             <button id="save" type="submit">Save</button>
        // </div>

        
        
        
        



        exit();
        let topSkills=document.createElement("div");
        topSkills.id="topSkills";
        let addTopSkill=document.createElement("button");
        addTopSkill.id="addTopSkill";
        let add=document.createElement("i");
        add.classList.add("material-icons");
        add.classList.add("add");
        add.append("add");
        addTopSkill.append(add,"Add skill");
        let topSkillInputContainer=document.createElement("div");
        topSkillInputContainer.id="topSkillInputContainer";

        
        let topSkillList=[];
        
       
        addExperience.render("tab");
        document.getElementById("row4").classList.add("modalSelect");
        document.getElementById("row5").classList.add("modalSelect");
        topSkills.style.order=100;
        addTopSkill.style.order=100;
        topSkillInputContainer.style.order=100;
        addTopSkill.type="button";
        document.querySelector("#tab form").append(topSkills,addTopSkill,topSkillInputContainer);
        
        
        console.log(document.getElementById("saveExp"));
        // document.getElementById("").addEventListener("submit",function(event){
        //     event.preventDefault();
        //     console.log("finally");
        // })
        document.querySelector("#tab form").addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
            }
        });
        
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
                    left.append(close,skillName);
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
                console.log(topSkillList);
                
            });
            
               
            const skillInputContainer = document.getElementById("topSkillInputContainer");
            skillInputContainer.innerHTML = "";  
            skillInputContainer.appendChild(inputBox);
            
        });

        document.getElementById("topSkills").addEventListener("click",function(event){
            console.log("delete");
            if(event.target.className==='material-icons close'){
            let parent=event.target.parentElement.parentElement;
            let skillName=parent.querySelector(".skillName");
           
            topSkillList=topSkillList.filter(skill=>skill!==skillName.textContent);
            console.log(skillName);
            
            
            parent.remove();
            }
            
            
        })



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
                    headline,
                    topSkillList
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
                    headline,
                    topSkillList
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


document.getElementById("profileImg").addEventListener("click",()=>{
    let imgURL=JSON.parse(localStorage.getItem("imgURL")) || "/images/defaultPhoto.png";
    let modal=document.createElement("div");
    modal.id="modal";
    let tab=document.createElement("div");
    tab.id="tab";
    let photoheader=document.createElement("div");
    photoheader.id="photoheader";
    let close=document.createElement("span");
    close.className="material-icons";
    close.id="quit";
    close.append("close");
    photoheader.append("Profile photo",close);
    let profilePhoto=document.createElement("img");
    profilePhoto.id="imageDisplay";
    profilePhoto.src=imgURL;
    let input=document.createElement("input");
    input.type="file";
    input.id="imageInput";
    let photoFooter=document.createElement("div");
    photoFooter.id="photoFooter";
    let edit=document.createElement("span");
    edit.className="material-icons";
    edit.id="addPhoto";
    let remove=document.createElement("span");
    remove.className="material-icons";
    edit.append("edit");
    remove.append("delete");
    remove.id="delete";
    photoFooter.append(edit,remove);
    tab.append(photoheader,profilePhoto,input,photoFooter);
    modal.append(tab);
    let addModal = document.getElementById("addModal");
    addModal.append(modal);
    tab.style.backgroundColor="black";
    tab.style.height="fit-content";
    tab.style.color="white";
    tab.style.display="flex";
    tab.style.flexDirection="column";

    document.getElementById("photoheader").style.cssText =`
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.25rem;
            margin-bottom: 1rem;;
            padding-top: 1rem;;
            padding-left: 1rem;
            padding-right: 1rem;
    `;

    document.getElementById("photoFooter").style.cssText =`
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 1.25rem;
            border-top: solid rgba(224, 215, 215, 0.5) 1px;;
            padding: 1rem;
            
    `;
    document.getElementById("quit").style.backgroundColor="black";
    document.getElementById("imageDisplay").style.cssText=`
        width:20rem;
        height: 20rem;;
        border-radius: 50%;
        padding-left: 1rem;;
        padding-right: 1rem;
        margin:0 auto;
        margin-bottom: 1rem;;
    `;
    document.getElementById("imageInput").style.display="none";


    


    exit();


    document.getElementById("addPhoto").addEventListener("click",function(){
        const imageInput=document.getElementById("imageInput")
        
        imageInput.click();
        

        imageInput.addEventListener("change",function(event){
        const file = event.target.files[0];
        const reader = new FileReader();
        let imgURL=JSON.parse(localStorage.getItem("imgURL")) || "";

        reader.onload=function(event){
            
            document.getElementById("imageDisplay").src=event.target.result;
            console.log(event.target.result)
            imgURL=event.target.result;
            localStorage.setItem("imgURL", JSON.stringify(imgURL));
            loadImg();

        }
        reader.readAsDataURL(file);
       
        
    })
    
    })

    document.getElementById("delete").addEventListener("click",()=>{
        console.log("delete img");
        let imgURL=JSON.parse(localStorage.getItem("imgURL")) || "/images/defaultPhoto.png";
        imgURL="/images/defaultPhoto.png";
        localStorage.setItem("imgURL", JSON.stringify(imgURL));
        document.getElementById("imageDisplay").src=imgURL;
        loadImg();
    })



    



    

})
document.getElementById("skillsFooter").addEventListener("click",()=>{
    let skills=document.getElementById("skillContainer").querySelectorAll(".skill");
    console.log(skills);
    for(let i=2;i<skills.length;i++){
        skills[i].style.display="block";
    }
})
document.getElementById("addProfile").addEventListener("click", function () {
    fetch('addToProfile.html')
        .then(response => response.text())
        .then(data => {
            let addModal = document.getElementById("addModal");
            addModal.innerHTML = data;

            exit();
           
            document.getElementById("addEdu").addEventListener("click", function () {
                // const formBuilder = new ConcreteFormBuilder()

                // const addEducation = formBuilder
                // .addTextField("Ex:Boston University","School","school",0)
                // .addTextField("Ex:Bachelor's","Degree","degree",0)
                // .addTextField("Ex:Busisness","Field","field",0)
                // .addDropdownField("", ["Month","Jan","Feb","Mar","Apr","May","June","July","August","Sep","Oct","Nov","Dec"],"Start date","startMonth",0)
                // .addDropdownField("", ["Year","2017","2018","2019","2020","2021","2022","2023","2024","2025"],"","startYear",1)
                // .addDropdownField("", ["Month","Jan","Feb","Mar","Apr","May","June","July","August","Sep","Oct","Nov","Dec"],"End date","endMonth",0)
                // .addDropdownField("", ["Year","2017","2018","2019","2020","2021","2022","2023","2024","2025"],"","endYear",1)
                // .addTextField("","Grade","grade",0)
                // .addTextArea("Ex:Alpha Phi Omega,Volleyball","Activities and societies","activity",0)
                // .addTextArea("","Description","description",0)
                // .getForm()

                // addEducation.setRowLayout(new Map([["school",1], ["degree", 2], ["field", 3], ["startMonth", 4], ["startYear", 4], ["endMonth", 5], ["endYear", 5]
                //     , ["grade", 6], ["activity", 7], ["description", 8]
                // ]))
                // let modal=document.createElement("div");
                // let tab=document.createElement("div");
                // modal.id="modal";
                // tab.id="tab";
                // modal.append(tab);

                // let headerWrapper=document.createElement("div");
                // headerWrapper.id="headerWrapper";
                // let header=document.createElement("div");
                // header.id="header";
                // header.append("Add education");
                // let quit=document.createElement("button");
                // quit.id="quit";
                // let close=document.createElement("i");
                // close.className="material-icons";
                // close.append("close");
                // quit.append(close);
                // headerWrapper.append(header,quit);
                // tab.append(headerWrapper);
                // addModal.innerHTML="";
                // addModal.append(modal);
                // addEducation.render("tab");
                
                // document.getElementById("row4").classList.add("modalSelect");
                // document.getElementById("row5").classList.add("modalSelect");


                // exit();

                // document.querySelector("#tab form").onsubmit=(event)=>{
                //     console.log("here");
                //     event.preventDefault();
        
                //     let school=document.querySelector("#school input").value;
                //     let degree=document.querySelector("#degree input").value;
                //     let field=document.querySelector("#field input").value;
                //     let startMonth=document.querySelector("#startMonth select").value;
                //     let startYear=document.querySelector("#startYear select").value;
                //     let endMonth=document.querySelector("#endMonth select").value;
                //     let endYear=document.querySelector("#endYear select").value;
                //     let grade=document.querySelector("#grade input").value;
                //     let activity=document.querySelector("#activity textarea").value;
                //     let description=document.querySelector("#description textarea").value;
                    
                //     if (!school || !degree || !field || startYear==="Year" || endYear==="Year") {
                //                 alert("Please fill in all required fields.");
                //                 return;  
                //             }
        
                //     let educationData=JSON.parse(localStorage.getItem("educationData")) || [];
                    
                //     educationData.push({
                //         school,
                //         degree,
                //         field,
                //         startMonth,
                //         startYear,
                //         endMonth,
                //         endYear,
                //         grade,
                //         description,
                //         activity

                //     })
                    
                    
                    
                    
                //     localStorage.setItem("educationData",JSON.stringify(educationData));
                //     document.querySelector("#tab form").reset();
                    
                //     loadEducationData();
                //     addModal.innerHTML="";

                    
                    
        
                // }

                education();


                
            });
            exit();


        })
        .catch(err => console.error("Error loading modal:", err));
});



document.getElementById("addSkillBtn").addEventListener("click",function(){
    skill();
    // let modal=document.createElement("div");
    // let tab=document.createElement("div");
    // modal.id="modal";
    // tab.id="tab";
    // modal.append(tab);

    // let headerWrapper=document.createElement("div");
    //     headerWrapper.id="headerWrapper";
    //     let header=document.createElement("div");
    //     header.id="header";
    //     header.append("Add skills");
    //     let quit=document.createElement("button");
    //     quit.id="quit";
    //     let close=document.createElement("i");
    //     close.className="material-icons";
    //     close.append("close");
    //     quit.append(close);
    //     headerWrapper.append(header,quit);
    //     tab.append(headerWrapper);

    // let formElement=document.createElement("div");
    // formElement.id="formElement"
    // let labelElement = document.createElement("label")
    //     let fieldElement = document.createElement("input")
    //     fieldElement.type ="text"
    //     fieldElement.placeholder = "Skill(Ex:Project Management)"
    //     labelElement.append("Skill");
    //     labelElement.append(fieldElement);
    //     labelElement.id="skill";
    // formElement.append(labelElement);
    
    

    // let footer=document.createElement("div");
    //     footer.id="footer";
    //     let save=document.createElement("button");
    //     save.id="save";
    //     save.type="submit"
    //     save.append("save")
    //     footer.append(save);
    //     let topSkills=document.createElement("div");
    //     topSkills.id="topSkills";
    //     formElement.append(topSkills);
    //   formElement.append(footer);

      

    //   let skillData=JSON.parse(localStorage.getItem("skillData"))||[];
    //   let topSkillsArray=[];
    //   skillData.forEach((skill)=>{
    //     const skillSet = document.createElement("div");
    //     skillSet.classList.add("skillSet");
    //     skillSet.draggable="true";
    //     const left=document.createElement("div");
    //     left.classList.add("left");
    //     const right=document.createElement("div");
    //     right.classList.add("right");
    //     const close=document.createElement("i");
    //     close.classList.add("material-icons");
    //     close.classList.add("close");
    //     close.textContent="close"
    //     const skillName=document.createElement("div");
    //     skillName.classList.add("skillName");
    //     const menu=document.createElement("i");
    //     menu.classList.add("material-icons");
    //     menu.classList.add("move");
    //     menu.textContent="menu"
    //     skillName.textContent=skill;
    //     left.append(close,skillName);
    //     right.append(menu);
    //     skillSet.append(left,right);
    //     topSkillsArray.push(skillSet);
    // })
   
    // topSkills.append(...topSkillsArray);

    // tab.append(formElement);
      
    //   let addModal=document.getElementById("addModal");
    //   addModal.append(modal);

    //   exit();

    // let inputBox=document.querySelector("#skill input");

    // function saveSkill() {
    //     const skill = inputBox.value;
    //     if (skill) {
            
    //         skillData.push(skill);
    //         const skillSet = document.createElement("div");
    //         skillSet.classList.add("skillSet");
    //         skillSet.classList.add("dropTarget");
    //         skillSet.draggable="true";
    //         const left=document.createElement("div");
    //         left.classList.add("left");
    //         const right=document.createElement("div");
    //         right.classList.add("right");
    //         const close=document.createElement("i");
    //         close.classList.add("material-icons");
    //         close.classList.add("close");
    //         close.textContent="close"
    //         const skillName=document.createElement("div");
    //         skillName.classList.add("skillName");
    //         const menu=document.createElement("i");
    //         menu.classList.add("material-icons");
    //         menu.classList.add("move");
    //         menu.textContent="menu"
    //         skillName.textContent=skill;
    //         left.append(close,skillName);
    //         right.append(menu);
    //         skillSet.append(left,right);
    //         let topSkills=document.getElementById("topSkills");
    //         topSkills.append(skillSet);
    //         console.log(topSkills)

    //         inputBox.value = ""; 
            
            
    //     } else {
    //         console.log("Please enter a skill");
    //     }
    // }
    // inputBox.addEventListener("keydown", function(event) {
        
    //     if (event.key === "Enter") {  
    //         saveSkill();  
    //     }
        
        
    // });
    // let dragged = null;

    // document.getElementById("topSkills").addEventListener("dragstart", (event) => {
    //     if (event.target.classList.contains("skillSet")) {
    //         dragged = event.target;
          
            
    //     }
    // });
    
    // document.getElementById("topSkills").addEventListener("dragover", (event) => {
    //     event.preventDefault(); 
    // });
    
    // document.getElementById("topSkills").addEventListener("drop", (event) => {
    //     event.preventDefault();
    
    //     if (dragged && dragged !== event.target && event.target.classList.contains("skillSet")) {
    //         let parent = document.getElementById("topSkills");
    
            
    //         let targetMiddleY = event.target.offsetTop + event.target.offsetHeight / 2;
    
           
    //         if (event.clientY < targetMiddleY) {
                
    //             parent.insertBefore(dragged, event.target);
    //         } else {
                
    //             if (event.target.nextElementSibling) {
    //                 parent.insertBefore(dragged, event.target.nextElementSibling);
    //             } else {
    //                 parent.appendChild(dragged);
    //             }
    //         }
    //     }
    
       
    //     if (dragged) {
            
    //         dragged = null; 
    //     }
    // });
    


    


    // document.getElementById("topSkills").addEventListener("click",function(event){
    //     console.log("delete");
    //     if(event.target.className==='material-icons close'){
    //     let parent=event.target.parentElement.parentElement;
    //     let skillName=parent.querySelector(".skillName");
       
    //     skillData=skillData.filter(skill=>skill!==skillName.textContent);
    //     console.log(skillName);
        
        
    //     parent.remove();
    //     }
        
        
    // })

    // document.getElementById("save").addEventListener("click",function(event){
    //     event.preventDefault();  
    //     localStorage.setItem("skillData", JSON.stringify(skillData));
    //     loadSkillData();
    //     addModal.innerHTML="";
    // })

    
});

/////////////////////////

document.getElementById("editIntroBtn").addEventListener("click",function(){
   

    let experienceData=JSON.parse(localStorage.getItem("experienceData")) || [];
    let companyList=[];
    for(let i=0;i<experienceData.length;i++){
        companyList.push(experienceData[i].company);
    }
    let educationData=JSON.parse(localStorage.getItem("educationData")) || [];
    let schoolList=[];
    for(let i=0;i<educationData.length;i++){
        schoolList.push(educationData[i].school);
    }
    const formBuilder = new ConcreteFormBuilder()
    const editIntro = formBuilder
        .addTextField("","First Name","firstName",0)
        .addTextField("","Last Name","lastName",0)
        .addTextArea("","Headline","headline",0)
        .addDropdownField("", ["",...companyList],"Current Position","currentPosition",0)
        .addDropdownField("", ["",...schoolList],"School","school",0)
        .addTextField("","Country/Region","country",0)
        .addTextField("","City","city",0)
        .getForm()
        editIntro.setRowLayout(new Map([["firstName",1], ["lastName", 2], ["headline", 3], ["currentPosition", 4], ["school", 5], ["country", 6], ["city", 7]
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
        header.append("Add Intro");
        let quit=document.createElement("button");
        quit.id="quit";
        let close=document.createElement("i");
        close.className="material-icons";
        close.append("close");
        quit.append(close);
        headerWrapper.append(header,quit);
        tab.append(headerWrapper);

        
        
        document.getElementById("addModal").append(modal);
        editIntro.render("tab");

        exit();



        document.querySelector("#tab form").onsubmit=(event)=>{
            console.log("here");
            event.preventDefault();

            
            
            let firstName=document.querySelector("#firstName input").value;
            let lastName=document.querySelector("#lastName input").value;
            let currentPosition=document.querySelector("#currentPosition select").value;
            let school=document.querySelector("#school select").value;
            let country=document.querySelector("#country input").value;
            let city=document.querySelector("#city input").value;
            let headline=document.querySelector("#headline textarea").value;
            

            let introData=JSON.parse(localStorage.getItem("introData")) || {};
            
            introData={
                firstName,
                lastName,
                currentPosition,
                school,
                country,
                city,
                headline
            };
            
            
            
            
            localStorage.setItem("introData",JSON.stringify(introData));
            document.querySelector("#tab form").reset();
            
            loadPersonalData();
            addModal.innerHTML="";
            

        }


    
    // fetch("editIntro.html")
    // .then(response => response.text())
    // .then(data => {
            
    //         let addModal = document.getElementById("addModal");
    //         addModal.innerHTML = data;

    //         const closeBtn = document.getElementById('quit');
    //         closeBtn.addEventListener("click", function () {
    //                         addModal.innerHTML = "";
    //         });

    //         window.addEventListener("click", function (event) {
    //         if (event.target === document.getElementById('modal')) {
    //              addModal.innerHTML = "";
    //                 }
    //         });

    //         document.getElementById("personalDetails").addEventListener("submit",function(event){
    //             event.preventDefault();  

                
    //             let firstName = document.getElementById("firstName").value;
    //             let lastName = document.getElementById("lastName").value;
    //             let addName = document.getElementById("addName").value;
    //             let pronoun = document.getElementById("pronoun").value;
    //             let headline = document.getElementById("headlineInput").value;
    //             let industry = document.getElementById("industry").value;
    //             let country = document.getElementById("country").value;
    //             let city = document.getElementById("city").value;
                
    //             console.log("Headline:", headline); 

    //             let personalData = JSON.parse(localStorage.getItem("personalData")) || [];

    //             personalData={
    //                             firstName,
    //                             lastName,
    //                             addName,
    //                             pronoun,
    //                             headline,
    //                             industry,
    //                             country,
    //                             city
    //             };

    //             localStorage.setItem("personalData", JSON.stringify(personalData));

                            
    //             document.getElementById("personalDetails").reset();
    //             document.getElementById("name").textContent=`${firstName} ${lastName}`;
    //             document.getElementById("headline").textContent=`${headline}`;
    //             document.getElementById("location").textContent=`${city}, ${country}`;
                            
                

    //             addModal.innerHTML="";
    //         })
    // })
    // .catch(err => console.error("Error loading modal:", err));
});


////////////////////////


document.getElementById("aboutBtn").addEventListener("click",function(){
            // let modal=document.createElement("div");
            // let tab=document.createElement("div");
            // modal.id="modal";
            // tab.id="tab";
            // modal.append(tab);
            
            
            // let headerWrapper=document.createElement("div");
            // headerWrapper.id="headerWrapper";
            // let header=document.createElement("div");
            // header.id="header";
            // header.append("Edit About");
            // let quit=document.createElement("button");
            // quit.id="quit";
            // let close=document.createElement("i");
            // close.className="material-icons";
            // close.append("close");
            // quit.append(close);
            // headerWrapper.append(header,quit);
            // tab.append(headerWrapper);


            // let editWindow = document.createElement("div");
            // editWindow.id = "editWindow";

            // let description = document.createElement("p");
            // description.id = "description";
            // description.textContent = "You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences.";

            // let textarea = document.createElement("textarea");
            // textarea.id = "content";
            // textarea.placeholder = "Add about yourself here.";

            // let wordCount = document.createElement("div");
            // wordCount.id = "wordCount";
            // wordCount.textContent = "0/2000";

            // editWindow.append(description, textarea, wordCount);



            // let skills=document.createElement("div");
            // skills.id="skills";
            // let h3=document.createElement("h3");
            // let p=document.createElement("p");
            // h3.append("Skills");
            // p.append("Show your top skills — add up to 5 skills you want to be known for. They will also appear in your Skills section.")
            // let topSkills=document.createElement("div");
            // topSkills.id="topSkills";
            // let addTopSkill=document.createElement("button");
            // addTopSkill.id="addTopSkill";
            // let add=document.createElement("i");
            // add.className="material-icons add";
            // add.append("add");
            // addTopSkill.append(add,"Add skill");
            // let topSkillInputContainer=document.createElement("div");
            // topSkillInputContainer.id="topSkillInputContainer";
            // skills.append(h3,p,topSkills,addTopSkill,topSkillInputContainer);
            // tab.append(editWindow,skills)
            // let footer = document.createElement("div");
            // footer.id = "footer";
            // let saveButton = document.createElement("button");
            // saveButton.id = "save";
            // saveButton.textContent = "Save";
            // footer.appendChild(saveButton);
            // tab.append(footer);




            // document.getElementById("addModal").append(modal);
            // document.getElementById("skills").style.padding="1.5rem";

            // exit();

            // let aboutData = JSON.parse(localStorage.getItem("aboutData")) || {};
            // let topSkillList=aboutData.topSkillList || [];

            // topSkillList.forEach((skill)=>{
            //     const skillSet = document.createElement("div");
            //             skillSet.classList.add("skillSet");
            //             const left=document.createElement("div");
            //             left.classList.add("left");
            //             const right=document.createElement("div");
            //             right.classList.add("right");
            //             const close=document.createElement("i");
            //             close.classList.add("material-icons");
            //             close.classList.add("close");
            //             close.textContent="close"
            //             const skillName=document.createElement("div");
            //             skillName.classList.add("skillName");
            //             const menu=document.createElement("i");
            //             menu.classList.add("material-icons");
            //             menu.classList.add("move");
            //             menu.textContent="menu"
            //             skillName.textContent=skill;
            //             left.append(close,skillName);
            //             right.append(menu);
            //             skillSet.append(left,right);
            //             let topSkills=document.getElementById("topSkills");
            //             topSkills.append(skillSet);
            // })
            // document.getElementById("content").append(aboutData.aboutContent);

            // document.getElementById("addTopSkill").addEventListener("click", function() {
            //     this.style.display="none";
            //     const inputBox = document.createElement("input");
            //     inputBox.type = "text";
            //     inputBox.placeholder = "Skill";
            //     inputBox.id = "newSkill";
            
            //     function saveSkill() {
            //         const skill = inputBox.value;
            //         if (skill) {
                        
            //             topSkillList.push(skill);
            //             const skillSet = document.createElement("div");
            //             skillSet.classList.add("skillSet");
            //             const left=document.createElement("div");
            //             left.classList.add("left");
            //             const right=document.createElement("div");
            //             right.classList.add("right");
            //             const close=document.createElement("i");
            //             close.classList.add("material-icons");
            //             close.classList.add("close");
            //             close.textContent="close"
            //             const skillName=document.createElement("div");
            //             skillName.classList.add("skillName");
            //             const menu=document.createElement("i");
            //             menu.classList.add("material-icons");
            //             menu.classList.add("move");
            //             menu.textContent="menu"
            //             skillName.textContent=skill;
            //             left.append(close,skillName);
            //             right.append(menu);
            //             skillSet.append(left,right);
            //             let topSkills=document.getElementById("topSkills");
            //             topSkills.append(skillSet);
            //             console.log(topSkills)

            //             inputBox.value = ""; 
            //             inputBox.style.display="none";
            //             document.getElementById("addTopSkill").style.display="flex";
            //         } else {
            //             console.log("Please enter a skill");
            //         }
            //     }
                
                
                
                
                    
            //     inputBox.addEventListener("keydown", function(event) {
            //         if (event.key === "Enter") {  
            //             saveSkill();  
            //         }
                    
                    
            //     });
                
                
            //     const skillInputContainer = document.getElementById("topSkillInputContainer");
            //     skillInputContainer.innerHTML = "";  
            //     skillInputContainer.appendChild(inputBox);
                
            // });

            // document.getElementById("topSkills").addEventListener("click",function(event){
            //     console.log("delete");
            //     if(event.target.className==='material-icons close'){
            //     let parent=event.target.parentElement.parentElement;
            //     let skillName=parent.querySelector(".skillName");
            
            //     topSkillList=topSkillList.filter(skill=>skill!==skillName.textContent);
            //     console.log(skillName);
                
                
            //     parent.remove();
            //     }
                
                
            // })





            // document.getElementById("save").addEventListener("click",function(event){
            //     event.preventDefault();  

                
            //     let aboutContent = document.getElementById("content").value;
                
                
            //     console.log("Headline:", headline); 


                
                


                
            
                

            //     aboutData={
            //         aboutContent,
            //         topSkillList
            //     }


                

            //     localStorage.setItem("aboutData", JSON.stringify(aboutData));

                            
                
            //     loadAboutData();


                
                
                            
                

            //     addModal.innerHTML="";
            // })


        about();

   
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
    // const formBuilder = new ConcreteFormBuilder()

    // const addExperience = formBuilder
    //     .addTextField("Ex:Sales Manager","Title","title",0)
    //     .addDropdownField("", ["Please select","Full-time","Part-time","Internship"],"Employment type","empType",0)
    //     .addTextField("Ex:Tekion","Company or Organization","company",0)
    //     .addDropdownField("", ["Month","Jan","Feb","Mar","Apr"],"Start date","startMonth",0)
    //     .addDropdownField("", ["Year","2020","2021","2022","2022"],"","startYear",1)
    //     .addDropdownField("", ["Month","Jan","Feb","Mar","Apr"],"End date","endMonth",0)
    //     .addDropdownField("", ["Year","2020","2021","2022","2022"],"","endYear",1)
    //     .addTextField("Ex:London, UK","Location","location",0)
    //     .addDropdownField("", ["Please select","On-site","Hybrid","Remote"],"Location type","locationType",0)
    //     .addTextArea("List major duties and success, highlighting specific projects","Description","description",0)
    //     .addTextField("Headline","Profile Headline","headline",0)
    //     .getForm()

    //     addExperience.setRowLayout(new Map([["title",1], ["empType", 2], ["company", 3], ["startMonth", 4], ["startYear", 4], ["endMonth", 5], ["endYear", 5]
    //         , ["location", 6], ["locationType", 7], ["description", 8],["headline",9]
    //     ]))
    //     let modal=document.createElement("div");
    //     let tab=document.createElement("div");
    //     modal.id="modal";
    //     tab.id="tab";
    //     modal.append(tab);
        
        
    //     let headerWrapper=document.createElement("div");
    //     headerWrapper.id="headerWrapper";
    //     let header=document.createElement("div");
    //     header.id="header";
    //     header.append("Add experience");
    //     let quit=document.createElement("button");
    //     quit.id="quit";
    //     let close=document.createElement("i");
    //     close.className="material-icons";
    //     close.append("close");
    //     quit.append(close);
    //     headerWrapper.append(header,quit);
    //     tab.append(headerWrapper);

    //     document.getElementById("addModal").append(modal);
        
        

    //     // <div id="footer">
    //     //             <button id="save" type="submit">Save</button>
    //     // </div>

        
        
        
        



    //     exit();
    //     let topSkills=document.createElement("div");
    //     topSkills.id="topSkills";
    //     let addTopSkill=document.createElement("button");
    //     addTopSkill.id="addTopSkill";
    //     let add=document.createElement("i");
    //     add.classList.add("material-icons");
    //     add.classList.add("add");
    //     add.append("add");
    //     addTopSkill.append(add,"Add skill");
    //     let topSkillInputContainer=document.createElement("div");
    //     topSkillInputContainer.id="topSkillInputContainer";

        
    //     let topSkillList=[];
        
       
    //     addExperience.render("tab");
    //     document.getElementById("row4").classList.add("modalSelect");
    //     document.getElementById("row5").classList.add("modalSelect");
    //     topSkills.style.order=100;
    //     addTopSkill.style.order=100;
    //     topSkillInputContainer.style.order=100;
    //     addTopSkill.type="button";
    //     document.querySelector("#tab form").append(topSkills,addTopSkill,topSkillInputContainer);
        
        
    //     console.log(document.getElementById("saveExp"));
    //     // document.getElementById("").addEventListener("submit",function(event){
    //     //     event.preventDefault();
    //     //     console.log("finally");
    //     // })
    //     document.querySelector("#tab form").addEventListener("keydown", (event) => {
    //         if (event.key === "Enter") {
    //             event.preventDefault();
    //         }
    //     });
        
    //     document.getElementById("addTopSkill").addEventListener("click", function() {
    //         this.style.display="none";
    //         const inputBox = document.createElement("input");
    //         inputBox.type = "text";
    //         inputBox.placeholder = "Skill";
    //         inputBox.id = "newSkill";
           
    //         function saveSkill() {
    //             const skill = inputBox.value;
    //             if (skill) {
                    
    //                 topSkillList.push(skill);
    //                 const skillSet = document.createElement("div");
    //                 skillSet.classList.add("skillSet");
    //                 const left=document.createElement("div");
    //                 left.classList.add("left");
    //                 const right=document.createElement("div");
    //                 right.classList.add("right");
    //                 const close=document.createElement("i");
    //                 close.classList.add("material-icons");
    //                 close.classList.add("close");
    //                 close.textContent="close"
    //                 const skillName=document.createElement("div");
    //                 skillName.classList.add("skillName");
    //                 const menu=document.createElement("i");
    //                 menu.classList.add("material-icons");
    //                 menu.classList.add("move");
    //                 menu.textContent="menu"
    //                 skillName.textContent=skill;
    //                 left.append(close,skillName);
    //                 right.append(menu);
    //                 skillSet.append(left,right);
    //                 let topSkills=document.getElementById("topSkills");
    //                 topSkills.append(skillSet);
    //                 console.log(topSkills)

    //                 inputBox.value = ""; 
    //                 inputBox.style.display="none";
    //                 document.getElementById("addTopSkill").style.display="flex";
    //             } else {
    //                 console.log("Please enter a skill");
    //             }
    //         }
            
            
            
            
                
    //         inputBox.addEventListener("keydown", function(event) {
    //             if (event.key === "Enter") {  
    //                 saveSkill();  
    //             }
    //             console.log(topSkillList);
                
    //         });
            
               
    //         const skillInputContainer = document.getElementById("topSkillInputContainer");
    //         skillInputContainer.innerHTML = "";  
    //         skillInputContainer.appendChild(inputBox);
            
    //     });

    //     document.getElementById("topSkills").addEventListener("click",function(event){
    //         console.log("delete");
    //         if(event.target.className==='material-icons close'){
    //         let parent=event.target.parentElement.parentElement;
    //         let skillName=parent.querySelector(".skillName");
           
    //         topSkillList=topSkillList.filter(skill=>skill!==skillName.textContent);
    //         console.log(skillName);
            
            
    //         parent.remove();
    //         }
            
            
    //     })



    //     document.querySelector("#tab form").onsubmit=(event)=>{
    //         console.log("here");
    //         event.preventDefault();

    //         let title=document.querySelector("#title input").value;
            
    //         let empType=document.querySelector("#empType select").value;
    //         let company=document.querySelector("#company input").value;
    //         let startMonth=document.querySelector("#startMonth select").value;
    //         let startYear=document.querySelector("#startYear select").value;
    //         let endMonth=document.querySelector("#endMonth select").value;
    //         let endYear=document.querySelector("#endYear select").value;
    //         let location=document.querySelector("#location input").value;
    //         let locationType=document.querySelector("#locationType select").value;
    //         let description=document.querySelector("#description textarea").value;
    //         let headline=document.querySelector("#headline input").value;

    //         let experienceData=JSON.parse(localStorage.getItem("experienceData")) || [];
            
    //         let alreadypresent=false;
    //         for(let i=0;i<experienceData.length;i++){
    //             if(experienceData[i].company===company){
    //                 experienceData[i].details.push({
    //                 title,
    //                 empType,
    //                 startMonth,
    //                 startYear,
    //                 endMonth,
    //                 endYear,
    //                 location,
    //                 locationType,
    //                 description,
    //                 headline,
    //                 topSkillList
    //                 })
    //                 alreadypresent=true;
    //                 break;
    //             }
    //         }
            
            
    //         if(!alreadypresent){
    //             let details=[{
    //                 title,
    //                 empType,
    //                 startMonth,
    //                 startYear,
    //                 endMonth,
    //                 endYear,
    //                 location,
    //                 locationType,
    //                 description,
    //                 headline,
    //                 topSkillList
    //             }];
    //             experienceData.push({company,details});
                
    //         }
    //         alreadypresent=false;
            
    //         localStorage.setItem("experienceData",JSON.stringify(experienceData));
    //         document.querySelector("#tab form").reset();
            
    //         loadExperienceData();
    //         addModal.innerHTML="";
            

    //     }



    experience();

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
  
  
 
  
