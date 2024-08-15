import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Events = () => {
  const [events, setEvents] = useState(Array.from({ length: 10 }));

  const loadMoreEvents = () => {
    setTimeout(() => {
      setEvents(events.concat(Array.from({ length: 10 })));
    }, 1500);
  };

  return (
    <section className="events">
      <h2>Upcoming Events</h2>
      <InfiniteScroll
        dataLength={events.length}
        next={loadMoreEvents}
        hasMore={true}
        loader={<h4>Loading more events...</h4>}
      >
        {events.map((_, index) => (
          <div key={index} className="event">
            <h3>Event {index + 1}</h3>
            <p>Description of Event {index + 1} at NIT Trichy.</p>
          </div>
        ))}
      </InfiniteScroll>
    </section>
  );
};

export default Events;
