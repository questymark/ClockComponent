class Voter {
    constructor(options) {
        this.initialValue = options.initialValue || 0;
        let markup = document.querySelector("#template").innerHTML;
        let voter = document.createElement("div");
        voter.innerHTML = _.template(markup)({
            initialValue: this.initialValue
        });
        voter.classList.add("voter");
        options.elem.appendChild(voter)

        let elem = options.elem;
        this.vote = elem.querySelector(".vote");

        voter.addEventListener("click", this._down.bind(this));
        voter.addEventListener("click", this._up.bind(this));

        this.step = options.step || 1;

    }

    _down(event) {
        if (!event.target.closest(".down")) {
            return
        }

        this.vote.innerHTML = +this.vote.innerHTML - this.step;
    }

    _up(event) {
        if (!event.target.closest(".up")) {
            return
        }

        this.vote.innerHTML = +this.vote.innerHTML + this.step;
    }
}