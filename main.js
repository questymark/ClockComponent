class Voter {
    constructor(options) {

        this.initialValue = options.initialValue || 0;
        let elem = options.elem;
        options.elem.appendChild(this._render())
        this.vote = elem.querySelector(".vote");

        options.elem.addEventListener("click", this._down.bind(this));
        options.elem.addEventListener("click", this._up.bind(this));

        this.step = options.step || 1;

    }

    _render() {
        let markup = document.querySelector("#template").innerHTML;
        let voter = document.createElement("div");
        voter.innerHTML = _.template(markup)({
            initialValue: this.initialValue
        });
        voter.classList.add("voter");

        return voter;
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