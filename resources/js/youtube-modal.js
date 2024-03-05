const modalBtn = document.querySelector(".play-button");
const modal = document.querySelector(".modal-bg");

modalBtn.addEventListener('click', () =>{
    modal.innerHTML=`
    <button class="exit">
        <i class="fa-solid fa-xmark"></i>
    </button>
    <div class="modal">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/x3Yno9VUYBY?si=hBlYYzMs8ZSGSTn6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>`;
    modal.style.display = "flex";
    setTimeout(() => {
        modal.style.opacity = "1";
    }, 50);
});

modal.addEventListener("click", () => {
    modal.innerHTML = '';
    modal.style.opacity = "0";

    setTimeout(() => {
        modal.style.display = "none";
    }, 450);
});
