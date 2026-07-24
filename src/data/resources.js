export const resources = [
  {
    id: "1",
    slug: "official-python-docs",
    title: "Python Official Documentation",
    description: "The official documentation for Python. Comprehensive and authoritative.",
    category: "Official Documentation",
    difficulty: "All Levels",
    image: null,
    website: "https://docs.python.org",
    tags: ["reference", "official", "core"],
    featured: true
  },
  {
    id: "2",
    slug: "real-python",
    title: "Real Python",
    description: "In-depth tutorials and articles for all Python skill levels. One of the highest quality tutorial sites.",
    category: "Tutorials",
    difficulty: "All Levels",
    image: null,
    website: "https://realpython.com",
    tags: ["tutorials", "articles", "practical"],
    featured: true
  },
  {
    id: "3",
    slug: "automate-the-boring-stuff",
    title: "Automate the Boring Stuff with Python",
    description: "Learn Python by writing programs that do in minutes what would take you hours to do by hand.",
    category: "Books",
    difficulty: "Beginner",
    image: null,
    website: "https://automatetheboringstuff.com",
    tags: ["automation", "book", "free-to-read"],
    featured: true
  },
  {
    id: "4",
    slug: "cs50p",
    title: "CS50's Introduction to Programming with Python",
    description: "Harvard University's introduction to programming using Python, focusing on problem-solving.",
    category: "Courses",
    difficulty: "Beginner",
    image: null,
    website: "https://cs50.harvard.edu/python",
    tags: ["university", "video", "exercises"],
    featured: true
  },
  {
    id: "5",
    slug: "requests-library",
    title: "Requests: HTTP for Humans",
    description: "The definitive library for making HTTP requests in Python.",
    category: "Libraries",
    difficulty: "Intermediate",
    image: null,
    website: "https://requests.readthedocs.io",
    tags: ["http", "api", "web"],
    featured: false
  },
  {
    id: "6",
    slug: "leetcode",
    title: "LeetCode",
    description: "Platform for preparing for technical coding interviews with hundreds of Python problems.",
    category: "Practice Websites",
    difficulty: "Advanced",
    image: null,
    website: "https://leetcode.com",
    tags: ["algorithms", "interviews", "competitive"],
    featured: false
  },
  {
    id: "7",
    slug: "corey-schafer-youtube",
    title: "Corey Schafer",
    description: "Excellent YouTube channel featuring tutorials on Python, Django, Flask, and more.",
    category: "YouTube Channels",
    difficulty: "Intermediate",
    image: null,
    website: "https://www.youtube.com/c/Coreyms",
    tags: ["video", "flask", "django"],
    featured: true
  },
  {
    id: "8",
    slug: "python-cheatsheet",
    title: "Python Cheat Sheet",
    description: "A comprehensive cheat sheet for Python's core features and standard libraries.",
    category: "Cheat Sheets",
    difficulty: "Beginner",
    image: null,
    website: "https://www.pythoncheatsheet.org",
    tags: ["quick-reference", "syntax"],
    featured: false
  },
  {
    id: "9",
    slug: "jupyter",
    title: "Jupyter Notebooks",
    description: "Web-based interactive computing platform. Essential tool for data science in Python.",
    category: "Tools",
    difficulty: "Intermediate",
    image: null,
    website: "https://jupyter.org",
    tags: ["data-science", "interactive"],
    featured: false
  },
  {
    id: "10",
    slug: "fluent-python",
    title: "Fluent Python",
    description: "Advanced book teaching clear, concise, and effective Python code.",
    category: "Books",
    difficulty: "Advanced",
    image: null,
    website: "https://www.oreilly.com/library/view/fluent-python-2nd/9781492056348/",
    tags: ["advanced", "idiomatic"],
    featured: false
  },
  {
  id: "11",
  slug: "codeflowrecords-youtube",
  title: "CodeflowRecords",
  description: "Programming tutorials, coding projects, and developer content from the creator of PyDisciple.",
  category: "YouTube Channels",
  difficulty: "Beginner",
  image: null,
  website: "https://www.youtube.com/@CodeflowRecords",
  tags: ["video", "creator", "programming"],
  featured: false
}
];

export const getFeaturedResources = () => resources.filter(r => r.featured);

export const getCategories = () => {
  const categories = new Set(resources.map(r => r.category));
  return Array.from(categories).sort();
};
