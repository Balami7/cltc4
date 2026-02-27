import Hero from "@/components/Hero";
import EventsSlideshow from "@/components/EventsSlideshow";
import UpcomingPrograms from "@/components/UpcomingPrograms";
import CoursesSection from "@/components/CourseSection";
import NewsSection from "@/components/NewsSection";

async function getRecentEvents()     { return []; }
async function getUpcomingPrograms() { return []; }
async function getCourses()          { return []; }
async function getNews()             { return []; }

export default async function Home() {
  const [events, programs, courses, news] = await Promise.all([
    getRecentEvents(),
    getUpcomingPrograms(),
    getCourses(),
    getNews(),
  ]);

  return (
    <main>
      <Hero />
      <EventsSlideshow     events={events}     />
      <UpcomingPrograms    programs={programs} />
      <CoursesSection      courses={courses}   />
      <NewsSection         articles={news}     />
    </main>
  );
}