import Image from 'next/image'

const activities = [
  {
    title: "Understanding Anxiety",
    description: "Learn about anxiety triggers and coping mechanisms.",
    fileName: "Activity1.pdf",
    imageUrl: "/Minfu.png"
  },
  {
    title: "Stress Management",
    description: "Practical exercises for managing daily stress.",
    fileName: "stress-management.pdf",
    imageUrl: "/activity-2.jpg"
  },
  {
    title: "Building Self-Esteem",
    description: "Activities to boost confidence and self-worth.",
    fileName: "self-esteem-guide.pdf",
    imageUrl: "/activity-3.jpg"
  }
]

const MindfulnessActivities = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4558a3] mb-4">
            Mindfulness Activities
          </h2>
          <p className="text-black max-w-2xl mx-auto">
            Download these free resources to learn more about mental health in young people. 
            Each activity is designed to promote understanding and well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="relative aspect-video w-full mb-4">
                <Image
                  src={activity.imageUrl}
                  alt={activity.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#4558a3]">
                {activity.title}
              </h3>
              <p className="text-black">
                {activity.description}
              </p>
              <a
                href={`/${activity.fileName}`}
                download={activity.fileName}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#4558a3] hover:text-[#3a4b8c] font-medium"
              >
                Download PDF →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MindfulnessActivities 