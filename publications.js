document.addEventListener("DOMContentLoaded", function() {
    const publications = [
        {
            title: "More than my appearance: a pilot evaluation of the expand your Horizon Online functionality-based writing programme for adults with visible differences",
            date: "2024",
            authors: "Guest, E., Halliwell, E., Mathews, A., Alleva, J., & Harcourt, D.",
            link: "#"
        },
        {
            title: "A brief mindfulness meditation can ameliorate the effects of exposure to idealised social media images on self-esteem, mood, and body appreciation in young women: An online randomised controlled experiment",
            date: "2024",
            authors: "Hooper, R., Guest, E., Ramsey-Wade, C., & Slater, A.",
            link: "#"
        },
        {
            title: "Congenital melanocytic naevus (CMN) through the lens: Using photo-elicitation interviews to explore adjustment in adolescents with a rare birthmark condition",
            date: "2024",
            authors: "Guest, E., Williamson, H., & Harcourt, D.",
            link: "#"
        },
        {
            title: "Psychosocial Interventions for Children and Young People With Visible Differences Resulting From Appearance-Altering Conditions, Injury, or Treatment Effects: An Updated Systematic Review",
            date: "2024",
            authors: "Waite, E., Jenkinson, E., Kershaw, S., & Guest, E.",
            link: "#"
        },
        {
            title: "Imagery versus captions: The effect of body positive Instagram content on young women’s mood and body image",
            date: "2023",
            authors: "Cowles, E., Guest, E., & Slater, A.",
            link: "#"
        },
        {
            title: "A systematic review of interventions aiming to promote positive body image in children and adolescents",
            date: "2022",
            authors: "Guest, E., Zucchelli, F., Costa, B., Bhatia, R., Halliwell, E., & Harcourt, D.",
            link: "#"
        },
        {
            title: "What influences people’s responses to public health messages for managing risks and preventing infectious diseases? A rapid systematic review of the evidence and recommendations",
            date: "2021",
            authors: "Ghio, D., Lawes-Wickwar, S., Tang, M. Y., Epton, T., Howlett, N., Jenkinson, E., ... & Keyworth, C.",
            link: "#"
        },
        {
            title: "A rapid systematic review of public responses to health messages encouraging vaccination against infectious diseases in a pandemic or epidemic",
            date: "2021",
            authors: "Lawes-Wickwar, S., Ghio, D., Tang, M. Y., Keyworth, C., Stanescu, S., Westbrook, J., ... & Epton, T.",
            link: "#"
        },
        {
            title: "The nature and importance of women's goals for immediate and delayed breast reconstruction",
            date: "2021",
            authors: "Guest, E., Paraskeva, N., Griffiths, C., Hansen, E., Clarke, A., Baker, E., & Harcourt, D.",
            link: "#"
        },
        {
            title: "'Everybody’s Different: The Appearance Game'. A randomised controlled trial evaluating an appearance-related board game intervention with children aged 9–11 years",
            date: "2021",
            authors: "Guest, E., Jarman, H., Sharratt, N., Williamson, H., White, P., Harcourt, D., & Slater, A.",
            link: "#"
        },
        {
            title: "The effectiveness of interventions to improve psychosocial outcomes in parents of children with appearance‐affecting health conditions: A systematic review",
            date: "2021",
            authors: "Costa, B., Thornton, M., Guest, E., Meyrick, J., & Williamson, H.",
            link: "#"
        },
        {
            title: "The development and validation of the CARe Burn Scale: Child Form: a parent-proxy-reported outcome measure assessing quality of life for children aged 8 years and under living with a burn injury",
            date: "2020",
            authors: "Griffiths, C., Guest, E., Pickles, T., Hollèn, L., Grzeda, M., Tollow, P., & Harcourt, D.",
            link: "#"
        },
        {
            title: "The Effectiveness of Interventions Aiming to Promote Positive Body Image in Adults: A Systematic Review",
            date: "2019",
            authors: "Guest, E., Costa, B., Williamson, H., Meyrick, J., Halliwell, E., & Harcourt, D.",
            link: "#"
        },
        {
            title: "The experiences and support needs of grandparents of children born with cleft lip and/or palate",
            date: "2019",
            authors: "Guest, E., Costa, B., McCarthy, G., Cunniffe, C., & Stock, N. M.",
            link: "#"
        },
        {
            title: "The development and validation of the CARe Burn Scale—Adult Form: A Patient-Reported Outcome Measure (PROM) to assess quality of life for adults living with a burn injury",
            date: "2019",
            authors: "Griffiths, C., Guest, E., Pickles, T., Hollèn, L., Grzeda, M., White, P., ... & Harcourt, D.",
            link: "#"
        },
        {
            title: "The Contribution of a Charitable Organization to Regional Cleft Lip and Palate Services in England and Scotland",
            date: "2020",
            authors: "Stock, N. M., Guest, E., Stoneman, K., Ridley, M., Evans, C., LeRoy, C., ... & Rumsey, N.",
            link: "#"
        },
        {
            title: "Assessing the effectiveness of interventions to support patient decision making about breast reconstruction: A systematic review",
            date: "2018",
            authors: "Paraskeva, N., Guest, E., Lewis-Smith, H., & Harcourt, D.",
            link: "#"
        },
        {
            title: "A qualitative exploration of psychosocial specialists’ experiences of providing support in UK burn care services",
            date: "2018",
            authors: "Guest, E., Griffiths, C., & Harcourt, D.",
            link: "#"
        },
        {
            title: "Photo editing: Enhancing social media images to reflect appearance ideals",
            date: "2016",
            authors: "Guest, E.",
            link: "#"
        },
        {
            title: "A systematic review of patient reported outcome measures (PROMs) used in adult burn research",
            date: "2016",
            authors: "Griffiths, C., Guest, E., White, P., Gaskin, E., Rumsey, N., Pleat, J., & Harcourt, D.",
            link: "#"
        },
        {
            title: "Teachers’ perspectives on the impact of cleft lip and/or palate during the school years",
            date: "2019",
            authors: "Stock, N. M., Ridley, M., & Guest, E.",
            link: "#"
        }
    ];
    
    const tableBody = document.querySelector("#publications-table tbody");

    function renderTable(publications) {
        tableBody.innerHTML = ""; // Clear existing rows
        publications.forEach(pub => {
            const row = document.createElement("tr");

            // Title cell
            const titleCell = document.createElement("td");
            titleCell.textContent = pub.title;
            row.appendChild(titleCell);

            // Date cell
            const dateCell = document.createElement("td");
            dateCell.textContent = pub.date;
            row.appendChild(dateCell);

            // Authors cell
            const authorsCell = document.createElement("td");
            authorsCell.textContent = pub.authors;
            row.appendChild(authorsCell);

            // Link cell
            const linkCell = document.createElement("td");
            const link = document.createElement("a");
            link.href = pub.link;
            link.textContent = "View";
            linkCell.appendChild(link);
            row.appendChild(linkCell);

            tableBody.appendChild(row);
        });
    }

    renderTable(publications);

    window.filterPublications = function() {
        const keyword = document.getElementById("filter-input").value.toLowerCase();
        const filteredPublications = publications.filter(pub => 
            pub.title.toLowerCase().includes(keyword)
        );
        renderTable(filteredPublications);
    };

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            window.filterPublications();
        }
    }
     // Add event listener to input field for keypress event
     document.getElementById("filter-input").addEventListener("keypress", handleKeyPress);

    // Sorting functions
    function sortByDate() {
        publications.sort((a, b) => a.date.localeCompare(b.date));
        renderTable(publications);
    }

    function sortByAuthors() {
        publications.sort((a, b) => a.authors.localeCompare(b.authors));
        renderTable(publications);
    }

    function sortByTitle() {
        publications.sort((a, b) => a.title.localeCompare(b.title));
        renderTable(publications);
    }

    // Event listeners for sorting
    document.getElementById("sort-date").addEventListener("click", sortByDate);
    document.getElementById("sort-authors").addEventListener("click", sortByAuthors);
    document.getElementById("sort-title").addEventListener("click", sortByTitle);
});