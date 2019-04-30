app.config(['$locationProvider', '$httpProvider', function ($locationProvider, $httpProvider) {
        $locationProvider.hashPrefix('');
        // $httpProvider.interceptors.push('httpInjector');
        // $locationProvider.html5Mode(true);
    }]); 

app.config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    var cacheBustSuffix = Date.now();
    $urlRouterProvider.when("/", "/home");
    $urlRouterProvider.when("", "/home");
    $urlRouterProvider.otherwise("404");
    $stateProvider
    //For Load Main file to enter in dashboard
    .state('main', {
        abstract: true,
        templateUrl: 'views/main.html',
        controller: "headerCtrl",
        data: {
            pageTitle: 'Urevamp : Dashboard'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        files: [
                            "controllers/headerCtrl.js",
                            "directive/banner.js" 
                        ]
                    }

                ]);
            }]
        }
    })

    //landing page
    .state('/', { 
        url: "/home",
        parent: "main",
        isLoggedIn: false,
        iscustomer:true,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : home'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/homeCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })

    //Login route
    .state('main.login', { 
        url: "/login",
        parent: "main",
        isLoggedIn: false,
        iscustomer:true,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/login.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Login'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }
                ]);
            }]
        }
    })
    
    //signup route
    .state('main.signup', { 
        url: "/register",
        parent: "main",
        isLoggedIn: false,
        iscustomer:true,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/signup.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Register'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    }) 

    //changepassword route
    .state('main.changepassword', { 
        url: "/change-password",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/change-password.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Change Password'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }
                ]);
            }]
        }
    }) 
    
    // Profile route
    .state('main.profile', { 
        url: "/profile",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/profile.html',
                controller: ''
            },
            'footer': { 
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Profile' 
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [   
                            "controllers/headerCtrl.js"
                        ]
                    }
                ]);
            }]
        }
    }) 

    //Contract route
    .state('main.contract', { 
        url: "/contract",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/contract.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Contract'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }
                ]);
            }]
        }
    }) 

    //Chat page route
    .state('main.chat', { 
        url: "/chat",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/message.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Chat'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }
                ]);
            }]
        }
    }) 

    // Project detail after completion route
    .state('main.project-detailcomplete', { 
        url: "/project-detailcomplete",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/project-detail-completition.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Project detail completition'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    }) 

    //post a project route
    .state('main.post-project', { 
        url: "/post-project",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/post-project.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Post a project'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"                         
                        ]
                    }

                ]);
            }]
        }
    }) 

    // Project Viewer route
    .state('main.project-viewer', { 
        url: "/project-viewer",
        parent: "main", 
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/project-viewer.html',
                controller: ''
            },
            'footer': { 
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Project preview'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"                       
                        ]
                    }
                ]);
            }]
        }
    }) 

    // Detail Calender route
    .state('main.detail-calender', { 
        url: "/detail-calender",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/detail-calender.html',
                controller: ''
            },
            'footer': { 
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Detail Calender'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }
                ]);
            }] 
        }
    }) 

    // Bid Details Submitted by Professional route
    .state('main.Bid-details-submitted-professional', { 
        url: "/Bid-details-submitted-professional",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/Bid-details-submitted-professional.html',
                controller: ''
            },
            'footer': { 
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Bid details submitted professional'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }
                ]);
            }]
        }
    }) 

    // post-detail-with-bid route
    .state('main.post-detail-with-bid', { 
        url: "/post-detail-with-bid",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': { 
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/post-detail-with-bid.html',
                controller: ''
            },
            'footer': { 
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Post detail with bid'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }
                ]);
            }]
        }
    }) 

    //blog-and-market-trend route
    .state('main.blog-and-market-trend', {  
        url: "/blog-and-market-trend",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/blog-and-market-trend.html',
                controller: 'blogCtrl'
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'                
            }
        },
        data: {
            pageTitle: 'Urevamp : Blog and market trend'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js",
                            "controllers/blogCtrl.js",
                            "directive/pagination.js"
                        ]
                    }

                ]);
            }]
        }
    }) 

    //search Result route
    .state('main.search-result', {  
        url: "/search-result",
        parent: "main",
        isLoggedIn: false,
        iscustomer:true,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'searchResultCtrl'
            },
            'content': {
                templateUrl: 'views/customer/search-result.html',
                controller: 'searchResultCtrl'
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'                
            }
        },
        data: {
            pageTitle: 'Urevamp : Proffestional search result'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js",
                            "controllers/search-resultCtrl.js",
                            "directive/pagination.js"
                        ]
                    }

                ]);
            }]
        }
    }) 

    // My projects route
    .state('main.my-project', {  
        url: "/my-projects",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/my-project.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'                
            }
        },
        data: {
            pageTitle: 'Urevamp : My Projects'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"                            
                        ]
                    }
                ]);
            }]
        }
    }) 
 
    //my library route
    .state('main.my-library', {  
        url: "/my-library",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/my-library.html',
                controller: 'blogCtrl'
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'                
            }
        },
        data: {
            pageTitle: 'Urevamp : My Library'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js",
                            "controllers/blogCtrl.js",
                            "directive/pagination.js"
                        ]
                    }
                ]);
            }]
        }
    }) 

    //FAQ route
    .state('main.faq', {   
        url: "/faq",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/faq.html', 
                controller: 'accordianCtrl'
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'                
            }
        },
        data: {
            pageTitle: 'Urevamp : FAQ' 
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js",
                            "controllers/accordian.js",
                            "directive/pagination.js"
                        ]
                    }
                ]);
            }]
        }
    }) 

    //terms & condition route
    .state('main.privacy', { 
        url: "/privacy-policy",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/privacy-policy.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Privacy Policy'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }
                ]);
            }]
        }
    })

    //privacy-policy route
    .state('main.terms', { 
        url: "/terms",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/terms-and-condition.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Terms and Conditions'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    }) 

    //user consent route
    .state('main.consent', { 
        url: "/user-consent",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/user-consent.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : User Consent'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })   

    //delete account route
    .state('main.delete-account', { 
        url: "/delete-account", 
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/delete-account.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : delete Account'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    }) 

    // My contacts route
    .state('main.contact', { 
        url: "/contact",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/contact.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Contacts'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    }) 

    // My contacts route
    .state('main.mycontacts', {  
        url: "/my-contacts",
        parent: "main", 
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl' 
            },
            'content': {
                templateUrl: 'views/customer/my-contacts.html',
                controller: 'mycontactCtrl'
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : My contacts'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [ 
                            "controllers/headerCtrl.js",
                            "controllers/mycontactsCtrl.js",
                            "directive/pagination.js"
                        ]
                    }
                ]);
            }]
        }
    }) 

    // activity-log route
    .state('main.activity-log', { 
        url: "/activity-log",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/activity-log.html',
                controller: ''
            },
            'footer': { 
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Activity Log'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    }) 

    // customer professional Profile route
    .state('main.professional-profile', { 
        url: "/prof-profile",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            }, 
            'content': {
                templateUrl: 'views/customer/prof-profile.html',
                controller: 'reviewCtrl'
            },
            'footer': { 
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Profile' 
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [ 
                            "controllers/headerCtrl.js",
                            "controllers/reviewCtrl.js",
                            "directive/pagination.js"
                        ]
                    }
                ]);
            }]
        }
    }) 
    // account setting route
    .state('main.account-setting', { 
        url: "/account-setting",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/account-setting.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Account Setting'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })     

    // project-in-execution.html route
    .state('main.project-execution', { 
        url: "/project-execution",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        post_project:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/customer/project-in-execution.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp :  Project in execution'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    }) 

    // Professional My projects route
    .state('main.prof-my-project', {  
        url: "/professional/my-projects",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        views: {
            'header': { 
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/professional/my-project.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'                
            }
        },
        data: {
            pageTitle: 'Urevamp : My Projects'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"                            
                        ]
                    }
                ]);
            }]
        }
    }) 


    //  Professional  My projects visits tab route
    .state('main.prof-my-project-visits', {  
        url: "/professional/my-projects/visits",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/professional/my-project.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'                
            }
        },
        data: {
            pageTitle: 'Urevamp : My Projects'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"                            
                        ]
                    }
                ]);
            }]
        }
    })
    
    // professional Project detail route
    .state('main.prof_project_details', { 
        url: "/professional/project-details", 
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/professional/project-details.html',
                controller: ''
            },
            'footer': { 
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp :Professional Project Details'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }
                ]);
            }]
        }
    })

    // professional Project detail route
    .state('main.prof_submit_bid', { 
        url: "/professional/submit-bid",  
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/professional/submit-bid.html',
                controller: ''
            },
            'footer': { 
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Submit bid'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }
                ]);
            }]
        }
    })

    // professional project-in-execution route
    .state('main.professionalproject-in-execution', { 
        url: "/professional/project-in-execution",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/professional/project-execution.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Project in execution'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })  

    // professional Project detail after completion route
    .state('main.prof-project-detailcomplete', { 
        url: "/professional/project-detailcomplete",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl' 
            }, 
            'content': {
                templateUrl: 'views/professional/project-detail-completition.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Project detail completition'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })  

    // professional URevamp Wallet route
    .state('main.urevamp-wallet', { 
        url: "/professional/urevamp-wallet",
        parent: "main", 
        isLoggedIn: true,
        iscustomer:false, 
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/professional/urevamp-wallet.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : URevamp Wallet'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })

    // professional Profile route
    .state('main.prof-profile', { 
        url: "/professional/profile",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,   
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            }, 
            'content': {
                templateUrl: 'views/professional/my-profile.html',
                controller: 'reviewCtrl'
            },
            'footer': { 
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Profile' 
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [ 
                            "controllers/headerCtrl.js",
                            "controllers/reviewCtrl.js"
                        ]
                    }
                ]);
            }]
        }
    }) 
    // professional My Saved Projects route
    .state('main.mysaved-projects', { 
        url: "/professional/saved-projects",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,     
        views: { 
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/professional/saved-projects.html',
                controller: 'savedprojectCtrl'
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : My Saved Projects'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js",
                            "controllers/savedprojectCtrl.js",
                            "directive/pagination.js"
                        ]
                    }

                ]);
            }]
        }
    }) 

    // professional complete-profile route
    .state('main.complete-profile', { 
        url: "/professional/complete-profile",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false, 
        views: { 
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/professional/complete-profile.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Professional Complete Profile'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    }) 

    // professional Detail Calender route
    .state('main.professional-detail-calender', { 
        url: "/professional/detail-calender",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,        
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/professional/detail-calender.html',
                controller: ''
            },
            'footer': { 
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Detail Calender'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }
                ]);
            }]
        }
    }) 
    
    // professional search result route
    .state('main.professional-search-result', { 
        url: "/professional/search-result",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/professional/search-result.html',
                controller: ''
            },
            'footer': { 
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Search Result'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js",
                            "directive/pagination.js"
                        ]
                    }
                ]);
            }]
        }
    }) 

    // milestone project-in-execution route
    .state('main.ml-project-execution', { 
        url: "/milestone/project-execution",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/milestone/project-execution.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Project in execution'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    })
    
    // milestone customer project-in-execution route
    .state('main.ml-cust-project-execution', { 
        url: "/milestone/cust-project-execution",
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/milestone/cust-project-execution.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Customer Project in execution'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }

                ]);
            }]
        }
    }) 

    // milestone submit_bid route
    .state('main.ml_submit_bid', { 
        url: "/milestone/submit-bid",  
        parent: "main",
        isLoggedIn: true,
        iscustomer:false,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/milestone/submit-bid.html',
                controller: ''
            },
            'footer': { 
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Submit bid'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }
                ]);
            }]
        }
    })

    // m_f_home route
    .state('main.m_f_home', {  
        url: "/manufacturer/home",
        parent: "main",
        isLoggedIn: false,
        iscustomer:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': { 
                templateUrl: 'views/manufacturer/home.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'                
            }
        },
        data: {
            pageTitle: 'Urevamp : My Projects'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"                            
                        ]
                    }
                ]);
            }]
        }
    }) 

    // m_f Login route
    .state('main.mf_login', { 
        url: "/manufacturer/login",
        parent: "main",
        isLoggedIn: false,
        iscustomer:true,
        views: {
            'header': { 
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/manufacturer/login.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Login'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }
                ]);
            }]
        }
    })

    // m_f signup route
    .state('main.mf_signup', { 
        url: "/manufacturer/register",
        parent: "main",
        isLoggedIn: false,
        iscustomer:true,
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/manufacturer/signup.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'
            }
        },
        data: {
            pageTitle: 'Urevamp : Register'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"
                        ]
                    }
                ]);
            }]
        }
    }) 

    // m_f My blogs route
    .state('main.m_f_my_blog', {  
        url: "/manufacturer/my-blogs",
        parent: "main",
        views: {
            'header': {
                templateUrl: 'views/layout/header.html',
                controller: 'headerCtrl'
            },
            'content': {
                templateUrl: 'views/manufacturer/my-blog.html',
                controller: ''
            },
            'footer': {
                templateUrl: 'views/layout/footer.html',
                controller: 'headerCtrl'                
            }
        },
        data: {
            pageTitle: 'Urevamp : My Projects'
        },
        resolve: {
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                return $ocLazyLoad.load([
                    {
                        name: "home",
                        files: [
                            "controllers/headerCtrl.js"                            
                        ]
                    }
                ]);
            }]
        }
    }) 

    //404 page route
    .state('404', {
        url: "/404",
        templateUrl: "views/404.html",
        controller: "",
        data: {
            pageTitle: 'Urevamp : Retailer 404'
        },
        resolve: {
            store: function ($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: "404",
                    files: [
                    ]
                });
            }
        }
    })
});


app.run(function($rootScope, $state, $location, $timeout) {
    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        
        $rootScope.isLoggedIn = toState.isLoggedIn;
        $rootScope.iscustomer = toState.iscustomer;
        $rootScope.post_project = toState.post_project;
    });
});