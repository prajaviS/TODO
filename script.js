(function () {
    let cnt = 0;
    function xyz() {
        document.getElementById("addtask").addEventListener("click", function (event) {
            event.preventDefault();
            let val = document.getElementById("task").value;
            if (val !== "") {
                document.getElementById("task").value = "";
                cnt++;
                localStorage.setItem(cnt, val);

                document.querySelector(".bottompart").innerHTML += `<div class="totaltasks">
            <div class="maintask">
                <p class="tasktext">${localStorage.getItem(cnt)}</p>
            </div>
            <span id="done" class="material-symbols-outlined">
                done
                </span>
           </div>
          `;
            }
            else {
                alert("Please enter a task");
            }
        })
    }
    xyz();
    document.querySelector(".bottompart").addEventListener("click", function (event) {
        let clickedelem = event.target;
        if (clickedelem.id && clickedelem.id.startsWith("done")) {
            didit(clickedelem);
        }
    })
    function setdate() {
        setInterval(() => {
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
    
            document.querySelector(".tdate").innerHTML = `${day}-${month}-${year}`;
    
        }, 1000)
    
    }
    setdate();
})();
function didit(clickedElement) {
    let totaltasks = clickedElement.closest(".totaltasks");
    if (totaltasks) {
        // Find the ".maintask" element within the same ".totaltasks"
        let maintask = totaltasks.querySelector(".maintask");
        if (maintask) {
            // Add the "did" class to the found ".maintask" element
            maintask.classList.add("did");
        }
    }
}
function clearit() {
    localStorage.clear();
    document.querySelector(".bottompart").innerHTML = "";

}
