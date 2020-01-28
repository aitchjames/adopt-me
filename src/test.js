import Shorten from "./models/Shorten";
import * as shortenView from "./views/shortenView";
import { elements } from "./views/base";

const state = {};

const controlSearch = async () => {
    // Get query from webpage
    const query = shortenView.getInput();
    //console.log(query);

    if (query) {
        // New shorten object and add to state
        state.shorten = new Shorten(query);

        // Clear Input on form
        shortenView.clearInput();

        try {
            // Get shortened link result
            await state.shorten.getResults();

            // Render link to webpage
            //shortenView.renderResults(state.shorten.result);
        } catch (error) {
            alert("Couldn't fetch link");
        }
    }
};

// Event listener for form submit
elements.searchForm.addEventListener("submit", event => {
    event.preventDefault();
    controlSearch();
});

import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = "";
};

const renderLink = () => {
    const markup = `
    <div class="shorten-link__item">
        <p>${testset}</p>
        <div class="shorten-link__copy-item">
            <a href="${testset}">${testsetse}</a>
            <button class="shorten-link__copy-button button button--rounded">Copy</button>
        </div>
    </div>`;
    elements.linkResList.insertAdjacentHTML("beforeend", markup);
};

import axios from "axios";

export default class Shorten {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios.post("https://rel.ink/api/links/", {
                url: this.query
            });
            this.result = res.data;
            console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}

export const elements = {
    searchForm: document.querySelector(".shorten-form"),
    searchInput: document.querySelector(".shorten-form__input"),
    linkRes: document.querySelector(".shorten-link"),
    linkResList: document.querySelector(".shorten-link__item")
};
