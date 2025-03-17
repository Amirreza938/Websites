// Courses data and functionality

document.addEventListener('DOMContentLoaded', function() {
    // Sample course data
    const courses = [
        {
            id: 1,
            title: "Complete Web Development Bootcamp",
            description: "Learn HTML, CSS, JavaScript, React, Node.js and more to become a full-stack web developer.",
            image: "images/courses/web-dev.jpg",
            category: "Web Development",
            rating: 4.8,
            ratingCount: 4752,
            lessons: 120,
            duration: "20 hours",
            level: "Beginner to Advanced",
            price: "$89.99",
            instructor: {
                name: "Jadi",
                image: "images/Instructors/Jadi.jpg"
            }
        },
        {
            id: 2,
            title: "Data Science and Machine Learning",
            description: "Master data analysis, visualization, and machine learning algorithms with Python.",
            image: "images/courses/data-science.jpg",
            category: "Data Science",
            rating: 4.9,
            ratingCount: 3845,
            lessons: 85,
            duration: "18 hours",
            level: "Intermediate",
            price: "$94.99",
            instructor: {
                name: "Emily Chen",
                image: "images/instructors/emily-chen.jpg"
            }
        },
        {
            id: 3,
            title: "UI/UX Design Masterclass",
            description: "Learn to create beautiful user interfaces and exceptional user experiences.",
            image: "images/courses/ui-ux.jpg",
            category: "Design",
            rating: 4.7,
            ratingCount: 2956,
            lessons: 65,
            duration: "15 hours",
            level: "All Levels",
            price: "$79.99",
            instructor: {
                name: "Alex Johnson",
                image: "images/instructors/alex-johnson.jpg"
            }
        },
        {
            id: 4,
            title: "Mobile App Development with Flutter",
            description: "Build beautiful native apps for iOS and Android from a single codebase.",
            image: "images/courses/flutter.jpg",
            category: "Mobile Development",
            rating: 4.8,
            ratingCount: 1845,
            lessons: 72,
            duration: "16 hours",
            level: "Intermediate",
            price: "$84.99",
            instructor: {
                name: "Sarah Williams",
                image: "images/instructors/sarah-williams.jpg"
            }
        },
        {
            id: 5,
            title: "Python Programming for Beginners",
            description: "Start your coding journey with Python, the most versatile programming language.",
            image: "images/courses/python.jpg",
            category: "Programming",
            rating: 4.9,
            ratingCount: 5621,
            lessons: 90,
            duration: "17 hours",
            level: "Beginner",
            price: "$74.99",
            instructor: {
                name: "Michael Brown",
                image: "images/instructors/michael-brown.jpg"
            }
        },
        {
            id: 6,
            title: "Digital Marketing Masterclass",
            description: "Learn SEO, social media marketing, email campaigns, and more to grow your business.",
            image: "images/courses/marketing.jpg",
            category: "Marketing",
            rating: 4.7,
            ratingCount: 3254,
            lessons: 78,
            duration: "14 hours",
            level: "All Levels",
            price: "$69.99",
            instructor: {
                name: "Jessica Lee",
                image: "images/instructors/jessica-lee.jpg"
            }
        }
    ];

    // Function to generate star ratings
    function generateStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        
        let starsHTML = '';
        
        // Full stars
        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star"></i>';
        }
        
        // Half star
        if (halfStar) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        }
        
        // Empty stars
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star"></i>';
        }
        
        return starsHTML;
    }

    // Function to create course card HTML
    function createCourseCard(course) {
        return `
            <div class="course-card">
                <div class="course-image">
                    <img src="${course.image}" alt="${course.title}">
                    <div class="course-category">${course.category}</div>
                </div>
                <div class="course-content">
                    <div class="course-rating">
                        <div class="stars">${generateStars(course.rating)}</div>
                        <div class="rating-count">(${course.ratingCount})</div>
                    </div>
                    <h3 class="course-title"><a href="pages/course-details.html?id=${course.id}">${course.title}</a></h3>
                    <div class="course-details">
                        <div class="course-detail">
                            <i class="fas fa-book"></i> ${course.lessons} Lessons
                        </div>
                        <div class="course-detail">
                            <i class="fas fa-clock"></i> ${course.duration}
                        </div>
                        <div class="course-detail">
                            <i class="fas fa-signal"></i> ${course.level}
                        </div>
                    </div>
                    <div class="course-footer">
                        <div class="instructor">
                            <img src="${course.instructor.image}" alt="${course.instructor.name}">
                            <div class="instructor-name">${course.instructor.name}</div>
                        </div>
                        <div class="course-price">${course.price}</div>
                    </div>
                </div>
            </div>
        `;
    }

    // Populate featured courses on homepage
    const featuredCoursesContainer = document.getElementById('featured-courses');
    if (featuredCoursesContainer) {
        // Display only the first 3 courses on the homepage
        const featuredCourses = courses.slice(0, 3);
        let coursesHTML = '';
        
        featuredCourses.forEach(course => {
            coursesHTML += createCourseCard(course);
        });
        
        featuredCoursesContainer.innerHTML = coursesHTML;
    }

    // Populate all courses on courses page
    const allCoursesContainer = document.getElementById('all-courses');
    if (allCoursesContainer) {
        let coursesHTML = '';
        
        courses.forEach(course => {
            coursesHTML += createCourseCard(course);
        });
        
        allCoursesContainer.innerHTML = coursesHTML;
    }

    // Course filtering functionality
    const filterForm = document.getElementById('filter-form');
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const categoryFilter = document.getElementById('category-filter').value;
            const levelFilter = document.getElementById('level-filter').value;
            const priceFilter = document.getElementById('price-filter').value;
            
            let filteredCourses = [...courses];
            
            // Apply category filter
            if (categoryFilter !== 'all') {
                filteredCourses = filteredCourses.filter(course => 
                    course.category.toLowerCase() === categoryFilter.toLowerCase()
                );
            }
            
            // Apply level filter
            if (levelFilter !== 'all') {
                filteredCourses = filteredCourses.filter(course => 
                    course.level.toLowerCase().includes(levelFilter.toLowerCase())
                );
            }
            
            // Apply price filter
            if (priceFilter !== 'all') {
                if (priceFilter === 'free') {
                    filteredCourses = filteredCourses.filter(course => 
                        course.price === 'Free'
                    );
                } else if (priceFilter === 'paid') {
                    filteredCourses = filteredCourses.filter(course => 
                        course.price !== 'Free'
                    );
                } else if (priceFilter === 'low-to-high') {
                    filteredCourses.sort((a, b) => {
                        const priceA = parseFloat(a.price.replace('$', ''));
                        const priceB = parseFloat(b.price.replace('$', ''));
                        return priceA - priceB;
                    });
                } else if (priceFilter === 'high-to-low') {
                    filteredCourses.sort((a, b) => {
                        const priceA = parseFloat(a.price.replace('$', ''));
                        const priceB = parseFloat(b.price.replace('$', ''));
                        return priceB - priceA;
                    });
                }
            }
            
            // Update the courses display
            let coursesHTML = '';
            
            if (filteredCourses.length === 0) {
                coursesHTML = '<div class="no-courses">No courses match your filters. Please try different criteria.</div>';
            } else {
                filteredCourses.forEach(course => {
                    coursesHTML += createCourseCard(course);
                });
            }
            
            allCoursesContainer.innerHTML = coursesHTML;
        });
        
        // Reset filters
        const resetButton = document.getElementById('reset-filters');
        if (resetButton) {
            resetButton.addEventListener('click', function() {
                document.getElementById('category-filter').value = 'all';
                document.getElementById('level-filter').value = 'all';
                document.getElementById('price-filter').value = 'all';
                
                let coursesHTML = '';
                courses.forEach(course => {
                    coursesHTML += createCourseCard(course);
                });
                allCoursesContainer.innerHTML = coursesHTML;
            });
        }
    }

    // Course detail page functionality
    const courseDetailContainer = document.getElementById('course-detail');
    if (courseDetailContainer) {
        // Get course ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const courseId = parseInt(urlParams.get('id'));
        
        // Find the course
        const course = courses.find(c => c.id === courseId);
        
        if (course) {
            // Update page title
            document.title = `${course.title} - EduLearn`;
            
            // Update course detail content
            document.querySelector('.course-detail-title').textContent = course.title;
            document.querySelector('.course-detail-image img').src = course.image;
            document.querySelector('.course-description p').textContent = course.description;
            document.querySelector('.course-price-amount').textContent = course.price;
            
            // Update meta information
            document.querySelector('.instructor-name').textContent = course.instructor.name;
            document.querySelector('.instructor-image').src = course.instructor.image;
            document.querySelector('.meta-rating').innerHTML = `${generateStars(course.rating)} (${course.ratingCount})`;
            document.querySelector('.meta-students').textContent = `${Math.floor(course.ratingCount * 1.5)} Students`;
            document.querySelector('.meta-lessons').textContent = `${course.lessons} Lessons`;
            document.querySelector('.meta-duration').textContent = course.duration;
            document.querySelector('.meta-level').textContent = course.level;
            
            // Enroll button functionality
            const enrollButton = document.querySelector('.enroll-button');
            if (enrollButton) {
                enrollButton.addEventListener('click', function() {
                    alert(`You have successfully enrolled in "${course.title}"!`);
                });
            }
        } else {
            // Course not found
            courseDetailContainer.innerHTML = `
                <div class="course-not-found">
                    <h2>Course Not Found</h2>
                    <p>The course you are looking for does not exist or has been removed.</p>
                    <a href="courses.html" class="primary-btn">Browse Courses</a>
                </div>
            `;
        }
    }
});
