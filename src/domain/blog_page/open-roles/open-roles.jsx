import React from "react";
import FilterBar from "./filter/filter";
import JobCard from "./job-card/job-card";

import "./open-roles.css"


class OpenRoles extends React.Component {
    render() {
        return(
            <section className="open-roles-section">
                <div className="open-roles-container">
                    <div className="open-roles-header">
                        <h2>Open Roles</h2>
                        <p>come work with us</p>
                    </div>
                    <FilterBar />
                    <div className="job-cards">
                        <JobCard
                        title="Customer Service Associate"
                        description="Join our team as a Customer Support Representative where you'll be the first point of contact for our valued customers."
                        tags={["Customer Support", "Onsite", "Abuja, Nigeria"]}
                        />
                        <JobCard
                        title="Customer Service Associate"
                        description="Join our team as a Customer Support Representative where you'll be the first point of contact for our valued customers."
                        tags={["Customer Support", "Onsite", "Abuja, Nigeria"]}
                        />
                        <JobCard
                        title="Customer Service Associate"
                        description="Join our team as a Customer Support Representative where you'll be the first point of contact for our valued customers."
                        tags={["Customer Support", "Onsite", "Abuja, Nigeria"]}
                        />
                        <JobCard
                        title="Customer Service Associate"
                        description="Join our team as a Customer Support Representative where you'll be the first point of contact for our valued customers."
                        tags={["Customer Support", "Onsite", "Abuja, Nigeria"]}
                        />
                        <JobCard
                        title="Customer Service Associate"
                        description="Join our team as a Customer Support Representative where you'll be the first point of contact for our valued customers."
                        tags={["Customer Support", "Onsite", "Abuja, Nigeria"]}
                        />
                        <JobCard
                        title="Customer Service Associate"
                        description="Join our team as a Customer Support Representative where you'll be the first point of contact for our valued customers."
                        tags={["Customer Support", "Onsite", "Abuja, Nigeria"]}
                        />
                        <JobCard
                        title="Customer Service Associate"
                        description="Join our team as a Customer Support Representative where you'll be the first point of contact for our valued customers."
                        tags={["Customer Support", "Onsite", "Abuja, Nigeria"]}
                        />
                        <JobCard
                        title="Customer Service Associate"
                        description="Join our team as a Customer Support Representative where you'll be the first point of contact for our valued customers."
                        tags={["Customer Support", "Onsite", "Abuja, Nigeria"]}
                        />
                        <JobCard
                        title="Customer Service Associate"
                        description="Join our team as a Customer Support Representative where you'll be the first point of contact for our valued customers."
                        tags={["Customer Support", "Onsite", "Abuja, Nigeria"]}
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default OpenRoles;