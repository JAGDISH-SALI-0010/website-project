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
    slug: "Python-3-For-Absolute-Beginners",
    title: "Python 3 For Absolute Beginners",
    description: "This book is a comprehensive introduction to programming and Python. It is aimed at students and adults who want to use Python as a first programming language. No prior programming experience is assumed, but students will be expected to work through all of the chapters to get the most out of the material.",
    category: "Books",
    difficulty: "Beginner",
    image: null,
    website: "https://drive.google.com/file/d/1rUUZEHRK7_R24wMLNmC_GtbX83_b3l9H/view?usp=sharing",
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
    title: "Python Cheat Sheets By WebsiteSetup",
    description: "This reference sheet covers essential Python concepts for beginners, including syntax, control flow, functions, and common libraries. It’s perfect for quick lookups while you’re learning.",
    category: "Cheat Sheets",
    difficulty: "Beginner",
    image: null,
    website: "https://drive.google.com/file/d/1eoLWQc-sIO-HHWaxjGqeV56aAYB4QH12/view?usp=sharing",
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
    slug: "Think Python",
    title: "Think Python",
    description: "Written by Allen B. Downey and published by O'Reilly Media, this book teaches you how to think like a computer scientist with hands-on Python programming basics.",
    category: "Books",
    difficulty: "Advanced",
    image: null,
    website: "https://drive.google.com/file/d/1OhnX94l5ZsPgy8H_z0W6BnEfVOApcGaU/view?usp=sharing",
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
  featured: true
},
{
  id: "12",
  slug: "beginners-python-cheat-sheet",
  title: "Beginners Python Cheat Sheet",
  description: "This comprehensive cheat sheet covers essential Python concepts for beginners, including syntax, control flow, functions, and common libraries. It’s perfect for quick lookups while you’re learning.",
  category: "Cheat Sheets",
  difficulty: "Beginner",
  image: null,
  website: "https://drive.google.com/file/d/1SH87ZgM2uIHn8fLDJAMkLaWfF3NTyQLy/view?usp=sharing",
  tags: ["quick-reference", "syntax", "beginner"],
  featured: true
}
];

export const getFeaturedResources = () => resources.filter(r => r.featured);

export const getCategories = () => {
  const categories = new Set(resources.map(r => r.category));
  return Array.from(categories).sort();
};
