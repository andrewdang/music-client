import React from "react"
import Hero from "./Hero"
import LineBreakUp from "./LineBreakUp"
import LineBreakDown from "./LineBreakDown"
import PageIntro from "./PageIntro"
import ContactFooter from "./ContactFooter"
import CommunityStatistics from "./CommunityStatistics"
import Collaborators from "./Collaborators"
import CommunityOrganizations from "./CommunityOrganizations"
import Family from "./Family"
import Events from "./Events"

const OurPurpose = () => {
  return (
    <div className="content">
      <section id="mm-purpose">
        <Hero header="Our Purpose" pageClass="community" />
        <PageIntro
          header="Why Community?"
          headerColor="green"
          pageClass="community"
          content={`Some companies have things like "Mission Statements" and "Vision Statements." We don't. Instead, we have a purpose. And at Marmoset our purpose is Community. It's our most important thing. It's the thing that everything we do and everything we are is informed by and filtered through. You know how some people are crazy about coffee and tacos? That's sorta like us (actually, that's a lot like us), but what really drives us is supporting, educating, advocating for, and serving our community: the people, artists, musicians and creatives we work with on a daily basis. Our belief is this: we're all better when we collaborate, when we lean into one another and support each other. And if that collaboration leads to the perfect pairing of music and picture, that's pretty cool, too.`}
        >
          <br />
          <span style={{ fontWeight: "bold", color: "#8a4fab" }}>Now, who is our community?</span>
        </PageIntro>
        <LineBreakDown />
        <CommunityStatistics />
        <LineBreakUp />
        <Collaborators />
        <Family />
        <LineBreakUp />
        <CommunityOrganizations />
        <LineBreakDown />
        <Events />
        <ContactFooter />
      </section>
    </div>
  )
}

export default OurPurpose
