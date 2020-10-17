(() => {

    // make an AJAX request using Fetch API
    fetch('./data/classData.json')
    .then((res) => res.json())
    .then((data) => {

        const box = document.querySelector('.profPanelText')
        box.children[0].textContent = data.coursename + data.coursecode
        box.children[1].textContent = 'Professor - ' + data.profname
        box.children[2].textContent = data.classtime[0] + ' & ' + data.classtime[1]
        const info = document.querySelector('.courseInfo')
        info.children[0].textContent = data.coursename
        info.children[2].textContent = data.coursedesc
        const lowerNav = docuemnt.querySelector('.weeklySched ul')
        // handleData
        // here's where you would call the 
        // function that puts the pieces on the page
    })

    .catch((err) => {
        console.log(err);
    })

})();