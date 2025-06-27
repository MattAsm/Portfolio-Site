const jobData = [
    {
        category: "operator",
        country: "Canada",
        province: "Alberta",
        type: "part-time"
    },
    {
        category: "operator",
        country: "USA",
        province: "Texas",
        type: "part-time"
    },
    {
        category: "manufacturer",
        country: "Canada",
        province: "Vancouver",
        type: "full-time"
    },
    {
        category: "designer",
        country: "USA",
        province: "Texas",
        type: "full-time"
    },
   {
        category: "manager",
        country: "Canada",
        province: "Ontario",
        type: "full-time"
    },
]; 
//A call to a database retrieved from the backend would go in place of this data to automatically fill out the job board!
//That's beyond the scope of my project and knowledge though.

const displayResults = document.getElementById("result-list");
const category = document.getElementById("categories");
const country = document.getElementById("country");
const province = document.getElementById("province");
const jobType = document.getElementById("hiring-type");

const jobListings = document.getElementById("result-list");

jobData.forEach(job => {
    //Category
    if (!Array.from(category.options).some(option => option.value === job.category))
    {
        let cat = document.createElement("option");
        cat.value = job.category;
        cat.textContent = job.category.slice(0, 1).toUpperCase() + job.category.slice(1);
        category.appendChild(cat);
    }

    //Country
    if (!Array.from(country.options).some(option => option.value === job.country))
    {
        let ct = document.createElement("option");
        ct.value = job.country;
        ct.textContent = job.country.slice(0, 1).toUpperCase() + job.country.slice(1);
        country.appendChild(ct);
    }

    //Province
    if (!Array.from(province.options).some(option => option.value === job.province))
    {
        let prov = document.createElement("option");
        prov.value = job.province;
        prov.textContent = job.province.slice(0, 1).toUpperCase() + job.province.slice(1);
        province.appendChild(prov);
    }    

    //Hiring Type
    if (!Array.from(jobType.options).some(option => option.value === job.type))
    {
        let type = document.createElement("option");
        type.value = job.type;
        type.textContent = job.type.slice(0, 1).toUpperCase() + job.type.slice(1);
        jobType.appendChild(type);
    }    
});

jobData.forEach(job => {
    let listing = document.createElement("li");
    listing.innerHTML = `<a href="">A ${job.type} position for ${job.category} located in ${job.province}, ${job.country}</a>`;
    jobListings.appendChild(listing);
});

function sortJobs(){
    jobListings.replaceChildren();
    const selectedCategory = category.value;
    const selectedCountry = country.value;
    const selectedProvince = province.value;
    const selectedType = jobType.value;

    const filteredJobs = jobData.filter(job => {
        return (
            (selectedCategory === "" || job.category === selectedCategory) &&
            (selectedCountry === "" || job.country === selectedCountry) &&
            (selectedProvince === "" || job.province === selectedProvince) &&
            (selectedType === "" || job.type === selectedType)
        );
    });

    if (filteredJobs.length === 0) {
        let noResults = document.createElement("li");
        noResults.textContent = "No job listings match your current filters at the moment. Please check back at a later date!";
        jobListings.appendChild(noResults);
        return;
    }

    filteredJobs.forEach(job => {
        let listing = document.createElement("li");
        listing.innerHTML = `<a href="">A ${job.type} position for ${job.category} located in ${job.province}, ${job.country}</a>`;
        jobListings.appendChild(listing);
    });
}