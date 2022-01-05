<template>
  <span></span>
</template>

<script>
let personal_data = [
  {
    "name": "credible",
    "review_key": "credible",
    "link": "https://www.credible.com/personal-loan/?utm_source=westwin&utm_medium=referral&utm_campaign=personal_loans",
    "logo": "/data/images/credible.webp",
    "upto": "100000",
    "introduce": "Free to use, no hidden fees",
    "amount": {
      "min": 1000,
      "max": 100000
    },
    "rate": {
      "max": 10,
      "score": "9.9"
    },
    "compare": {
      "credit_score": "600",
      "credit_text": "",
      "apr": {
        "min": "2.49",
        "max": "35.99"
      },
      "term": "12-84 months"
    },
    "disclaimer": ""
  },
  {
    "name": "lightstream",
    "review_key": "lightstream",
    "link": "https://www.credible.com/a/lightstream-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=lightstream_pl",
    "logo": "/data/images/lightstream.webp",
    "upto": "1000000",
    "introduce": "Low fixed rates ",
    "amount": {
      "min": 5000,
      "max": 100000
    },
    "rate": {
      "max": 10,
      "score": "9.8"
    },
    "compare": {
      "credit_score": "660",
      "credit_text": "",
      "apr": {
        "min": "3.49",
        "max": "19.99"
      },
      "term": "24-84 months"
    },
    "disclaimer": ""
  },
  {
    "name": "avant",
    "review_key": "avant",
    "link": "https://www.credible.com/a/avant-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=avant_pl",
    "logo": "/data/images/avant.webp",
    "upto": "1000000",
    "introduce": "Clear and transparent process",
    "amount": {
      "min": 2000,
      "max": 35000
    },
    "rate": {
      "max": 10,
      "score": "9.6"
    },
    "compare": {
      "credit_score": "580",
      "credit_text": "",
      "apr": {
        "min": "9.95",
        "max": "35.99"
      },
      "term": "24-60 months"
    },
    "disclaimer": ""
  },
  {
    "name": "sofi",
    "review_key": "sofi",
    "link": "https://www.credible.com/a/sofi-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=sofi_pl",
    "logo": "/data/images/sofi.webp",
    "upto": "1000000",
    "introduce": "Prequalify for your rate in 3 minutes",
    "amount": {
      "min": 5000,
      "max": 100000
    },
    "rate": {
      "max": 10,
      "score": "9.5"
    },
    "compare": {
      "credit_score": "680",
      "credit_text": "",
      "apr": {
        "min": "5.99",
        "max": "18.85"
      },
      "term": "24-84 months"
    },
    "disclaimer": ""
  },
  {
    "name": "lendingclub",
    "review_key": "",
    "link": "https://www.credible.com/a/lendingclub-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=lendingclub_pl",
    "logo": "/data/images/lendingclub.webp",
    "upto": "1000000",
    "introduce": "Choice for debt consolidation",
    "amount": {
      "min": 1000,
      "max": 40000
    },
    "rate": {
      "max": 10,
      "score": "8.8"
    },
    "compare": {
      "credit_score": "600",
      "credit_text": "",
      "apr": {
        "min": "8.05",
        "max": "25.89"
      },
      "term": "36-60 months"
    },
    "disclaimer": ""
  },
  {
    "name": "upgrade",
    "review_key": "",
    "link": "https://www.credible.com/a/upgrade-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=upgrade_pl",
    "logo": "/data/images/upgrade.webp",
    "upto": "1000000",
    "introduce": "No fees",
    "amount": {
      "min": 1000,
      "max": 35000
    },
    "rate": {
      "max": 10,
      "score": "8.5"
    },
    "compare": {
      "credit_score": "670",
      "credit_text": "",
      "apr": {
        "min": "7.99",
        "max": "35.97"
      },
      "term": "36-60 months"
    },
    "disclaimer": ""
  },
  {
    "name": "best_egg",
    "review_key": "",
    "link": "https://www.credible.com/a/bestegg-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=bestegg_pl",
    "logo": "/data/images/best_egg.webp",
    "upto": "1000000",
    "introduce": "Get funding in as little as 1 day",
    "amount": {
      "min": "50000",
      "max": "Infinity"
    },
    "rate": {
      "max": 10,
      "score": "8.3"
    },
    "compare": {
      "credit_score": "600",
      "credit_text": "",
      "apr": {
        "min": "5.99",
        "max": "29.99"
      },
      "term": "36-60 months"
    },
    "disclaimer": ""
  }
];
let student_data = [
  {
    "name": "credible_stu",
    "review_key": "credible",
    "link": "https://www.credible.com/refinance-student-loans/?utm_source=westwin&utm_medium=referral&utm_campaign=student_loan_refi&utm_content=",
    "logo": "/data/images/credible.webp",
    "rate": {
      "max": 10,
      "score": "9.8"
    },
    "compare": {
      "credit_score": "600",
      "fixed_rate": {
        "min_rate": "3.49",
        "max_rate": "14.50"
      },
      "variable_rate": {
        "min_rate": "1.21",
        "max_rate": "12.98"
      }
    },
    "loan_term": {
      "min_term": "5",
      "max_term": "20"
    }
  },
  {
    "name": "SoFi_stu",
    "review_key": "",
    "link": "https://www.credible.com/a/dd-sofi/?utm_source=westwin&utm_medium=referral&utm_campaign=sofi_slr&utm_content=",
    "logo": "/data/images/sofi.webp",
    "rate": {
      "max": 10,
      "score": "9.5"
    },
    "compare": {
      "credit_score": "600",
      "fixed_rate": {
        "min_rate": "2.74",
        "max_rate": "6.39"
      },
      "variable_rate": {
        "min_rate": "2.25",
        "max_rate": "6.39"
      }
    },
    "loan_term": {
      "min_term": "5",
      "max_term": "20"
    }
  },
  {
    "name": "Citizens_Bank",
    "review_key": "",
    "link": "https://www.credible.com/a/dd-citizens/?utm_source=westwin&utm_medium=referral&utm_campaign=citizens_slr&utm_content=",
    "logo": "/data/images/citizens_bank.webp",
    "rate": {
      "max": 10,
      "score": "9.2"
    },
    "compare": {
      "credit_score": "600",
      "fixed_rate": {
        "min_rate": "2.97",
        "max_rate": "9.15"
      },
      "variable_rate": {
        "min_rate": "2.24",
        "max_rate": "8.90"
      }
    },
    "loan_term": {
      "min_term": "5",
      "max_term": "15"
    }
  },
  {
    "name": "MEFA",
    "review_key": "",
    "link": "https://www.credible.com/a/fh-mefa/?utm_source=westwin&utm_medium=referral&utm_campaign=mefa_slr&utm_content=",
    "logo": "/data/images/mefa.webp",
    "rate": {
      "max": 10,
      "score": "8.8"
    },
    "compare": {
      "credit_score": "600",
      "fixed_rate": {
        "min_rate": "4.25",
        "max_rate": "12.35"
      },
      "variable_rate": {
        "min_rate": "1.25",
        "max_rate": "11.10"
      }
    },
    "loan_term": {
      "min_term": "5",
      "max_term": "15"
    }
  },
  {
    "name": "PenFed",
    "review_key": "",
    "link": "https://www.credible.com/a/dd-penfed/?utm_source=westwin&utm_medium=referral&utm_campaign=penfed_slr&utm_content=",
    "logo": "/data/images/penfed.webp",
    "rate": {
      "max": 10,
      "score": "8.5"
    },
    "compare": {
      "credit_score": "600",
      "fixed_rate": {
        "min_rate": "2.89",
        "max_rate": "5.63"
      },
      "variable_rate": {
        "min_rate": "2.15",
        "max_rate": "5.27"
      }
    },
    "loan_term": {
      "min_term": "10",
      "max_term": "20"
    }
  },
  {
    "name": "RISLA",
    "review_key": "",
    "link": "https://www.credible.com/a/dd-risla-slr/?utm_source=westwin&utm_medium=referral&utm_campaign=risla_slr&utm_content=",
    "logo": "/data/images/risla.webp",
    "rate": {
      "max": 10,
      "score": "8.1"
    },
    "compare": {
      "credit_score": "600",
      "fixed_rate": {
        "min_rate": "3.53",
        "max_rate": "14.50"
      },
      "variable_rate": {
        "min_rate": "2.69",
        "max_rate": "12.98"
      }
    },
    "loan_term": {
      "min_term": "10",
      "max_term": "15"
    }
  },
  {
    "name": "Salliemae",
    "review_key": "",
    "link": "https://www.salliemae.com",
    "logo": "/data/images/salliemae.webp",
    "rate": {
      "max": 10,
      "score": "7.8"
    },
    "compare": {
      "credit_score": "600",
      "fixed_rate": {
        "min_rate": "4.25",
        "max_rate": "12.35"
      },
      "variable_rate": {
        "min_rate": "1.25",
        "max_rate": "11.15"
      }
    },
    "loan_term": {
      "min_term": "5",
      "max_term": "15"
    }
  },
  {
    "name": "College Ave",
    "review_key": "",
    "link": "https://www.collegeave.com",
    "logo": "/data/images/collegeave.webp",
    "rate": {
      "max": 10,
      "score": "7.5"
    },
    "compare": {
      "credit_score": "600",
      "fixed_rate": {
        "min_rate": "3.49",
        "max_rate": "12.99"
      },
      "variable_rate": {
        "min_rate": "1.24",
        "max_rate": "11.98"
      }
    },
    "loan_term": {
      "min_term": "5",
      "max_term": "15"
    }
  },
  {
    "name": "earnest",
    "review_key": "",
    "link": "https://www.earnest.com",
    "logo": "/data/images/earnest.webp",
    "rate": {
      "max": 10,
      "score": "7.3"
    },
    "compare": {
      "credit_score": "600",
      "fixed_rate": {
        "min_rate": "3.49",
        "max_rate": "12.78"
      },
      "variable_rate": {
        "min_rate": "1.24",
        "max_rate": "11.44"
      }
    },
    "loan_term": {
      "min_term": "5",
      "max_term": "20"
    }
  }
];
let mortgage_purchase = [
  {
    "name": "Credible",
    "review_key": "",
    "link": "https://www.credible.com/mortgage?utm_source=westwin&utm_medium=referral&utm_campaign=mortgage_purchase&utm_content=",
    "logo": "/data/images/credible.jpg",
    "rate": {
      "max": 10,
      "score": "9.8"
    },
    "slogan": "1 Application, Several Offers",
    "meritList": [
      {
        "text": "Compare rates in minutes"
      },
      {
        "text": "Easy process, 100% online"
      },
      {
        "text": "Secured website with data encryption"
      }
    ],
    "key_facts": {
      "mortgage_types": "jumbo, conventional, refinance",
      "credit_score": "620",
      "apr": "set by lender",
      "NMLS": "1681276"
    },
    "pros": [
      {
        "text": "No fees to use Credible’s services"
      },
      {
        "text": "Find out your actual rate without a hard credit check"
      },
      {
        "text": "E-verification for many financial documents"
      }
    ],
    "cons": [
      {
        "text": "Credible doesn’t operate in several large states"
      },
      {
        "text": "No face-to-face customer support"
      }
    ]
  },
  {
    "name": "Quicken Loans",
    "review_key": "",
    "link": "https://quicken.sjv.io/15ZBQa",
    "logo": "/data/images/quicken-loans.webp",
    "rate": {
      "max": 10,
      "score": "9.7"
    },
    "slogan": "A+ Customer Satisfaction",
    "meritList": [
      {
        "text": "35 years of experience"
      },
      {
        "text": "Fully automated, online process"
      },
      {
        "text": "Pre-approval available"
      }
    ],
    "key_facts": {
      "mortgage_types": "Purchase, Refinance, Jumbo, Fixed, Adjustable, FHA, VA",
      "credit_score": "620",
      "apr": "set by lender",
      "NMLS": "3030"
    },
    "pros": [
      {
        "text": "Couples a fully online application through Rocket Mortgage with mortgage advisers available over the phone."
      },
      {
        "text": "Via Rocket, offers a prequalification estimate within minutes."
      },
      {
        "text": "Rocket's online approval process offers convenience, with online document upload, loan tracking and the ability to generate a custom approval letter."
      }
    ],
    "cons": [
      {
        "text": "Getting a personalized rate requires a hard credit inquiry."
      },
      {
        "text": "Doesn't offer home equity loans or HELOCs."
      },
      {
        "text": "Lender fees can be stout, and the fees aren't offset by particularly low mortgage rates, according to the latest data."
      }
    ]
  },
  {
    "name": "LoanDepot",
    "review_key": "",
    "link": "https://fxo.co/DGxu",
    "logo": "/data/images/loan-depot.png",
    "rate": {
      "max": 10,
      "score": "9.5"
    },
    "slogan": "No Login/Registration Required",
    "meritList": [
      {
        "text": "Has funded over $65 billion in home loans"
      },
      {
        "text": "Clearance in as little as 8 days"
      },
      {
        "text": "Mello smartloan™ digital asset verification"
      }
    ],
    "key_facts": {
      "mortgage_types": "purchase, refinance, adjustable & fixed rates, jumbo & more",
      "credit_score": "620",
      "apr": "depends on type of loan & lender",
      "NMLS": "174457"
    },
    "pros": [
      {
        "text": "Can choose face-to-face interaction by accessing over 150 affiliated loan stores in the United States"
      },
      {
        "text": "Experienced FHA and VA lender"
      },
      {
        "text": "Fannie Mae HomeStyle home improvement and FHA 302K fixer-upper loans available"
      },
      {
        "text": "100% digital asset, employment, and income verification available"
      }
    ],
    "cons": [
      {
        "text": "No home equity line of credit or loan products available"
      },
      {
        "text": "USDA Rural Development loans not available"
      }
    ]
  },
  {
    "name": "Sterns loan",
    "review_key": "",
    "link": "https://stearns.com/",
    "logo": "/data/images/stearns_home_loans.webp",
    "rate": {
      "max": 10,
      "score": "8.8"
    },
    "slogan": "Unlock Your Financial Potential",
    "meritList": [
      {
        "text": "Provides great refinancing calculators"
      },
      {
        "text": "An all-digital app, no hassle"
      },
      {
        "text": "Dedicated support team"
      }
    ],
    "key_facts": {
      "mortgage_types": "Purchase, Refinance, Jumbo, Fixed, Adjustable, FHA, VA, USDA",
      "credit_score": "620",
      "apr": "dependent on loan type",
      "NMLS": "1854"
    },
    "pros": [
      {
        "text": "Offers extensive educational resources for military borrowers"
      },
      {
        "text": "Provides digital tools for a streamlined application process"
      },
      {
        "text": "Participates in some state down payment assistance and first-time home buyer programs"
      }
    ],
    "cons": [
      {
        "text": "No mortgage rates displayed online"
      },
      {
        "text": "Doesn’t offer home equity loans or lines of credit"
      }
    ]
  },
  {
    "name": "Rocket Mortgage",
    "review_key": "",
    "link": "https://www.rocketmortgage.com/",
    "logo": "/data/images/rocket_mortgage.webp",
    "rate": {
      "max": 10,
      "score": "8.6"
    },
    "slogan": "Discover custom home loan option",
    "meritList": [
      {
        "text": "Get a Verified Approval Letter 2 (VAL)"
      },
      {
        "text": "Access online tools 24/7"
      },
      {
        "text": "See closing costs and tax estimates"
      }
    ],
    "key_facts": {
      "mortgage_types": "Purchase, Refinance, Jumbo, Fixed, Adjustable, FHA, VA, USDA",
      "credit_score": "620",
      "apr": "set by lender",
      "NMLS": "3030"
    },
    "pros": [
      {
        "text": "Caters to self-service users who want to apply for a home loan online and talk to a human only as necessary"
      },
      {
        "text": "Estimates the loan amount you’ll qualify for within minutes"
      },
      {
        "text": "Offers document and asset retrieval capabilities"
      }
    ],
    "cons": [
      {
        "text": "If you’re a “look me in the eye” type of customer, you’re out of luck"
      },
      {
        "text": "Getting a customized interest rate requires a credit check, which can lower your credit score by a few points"
      }
    ]
  },
  {
    "name": "Caliber",
    "review_key": "",
    "link": "https://www.caliberhomeloans.com/",
    "logo": "/data/images/caliber.webp",
    "rate": {
      "max": 10,
      "score": "8.5"
    },
    "slogan": "Simple Solution for Every Step",
    "meritList": [
      {
        "text": "Competitive refinancing rates"
      },
      {
        "text": "Provides great refinancing calculators"
      },
      {
        "text": "Honest rate quotes & access to experts"
      }
    ],
    "key_facts": {
      "mortgage_types": "Purchase, Refinance, Jumbo, Fixed, Adjustable, FHA, VA, USDA",
      "credit_score": "620",
      "apr": "set by lender",
      "NMLS": "3030"
    },
    "pros": [
      {
        "text": "Offers extensive educational resources for military borrowers"
      },
      {
        "text": "Provides digital tools for a streamlined application process"
      },
      {
        "text": "Participates in some state down payment assistance and first-time home buyer programs"
      }
    ],
    "cons": [
      {
        "text": "No mortgage rates displayed online"
      },
      {
        "text": "Doesn’t offer home equity loans or lines of credit"
      }
    ]
  }
];
let mortgage_refinance = [
  {
    "name": "Credible",
    "review_key": "",
    "link": "https://www.credible.com/mortgage-refinance?utm_source=westwin&utm_medium=referral&utm_campaign=mortgage_refi&utm_content=",
    "logo": "/data/images/credible.jpg",
    "rate": {
      "max": 10,
      "score": "9.8"
    },
    "slogan": "1 Application, Several Offers",
    "meritList": [
      {
        "text": "Compare rates in minutes"
      },
      {
        "text": "Easy process, 100% online"
      },
      {
        "text": "Secured website with data encryption"
      }
    ],
    "key_facts": {
      "mortgage_types": "jumbo, conventional, refinance",
      "credit_score": "620",
      "apr": "set by lender",
      "NMLS": "1681276"
    },
    "pros": [
      {
        "text": "No fees to use Credible’s services"
      },
      {
        "text": "Find out your actual rate without a hard credit check"
      },
      {
        "text": "E-verification for many financial documents"
      }
    ],
    "cons": [
      {
        "text": "Credible doesn’t operate in several large states"
      },
      {
        "text": "No face-to-face customer support"
      }
    ]
  },
  {
    "name": "Quicken Loans",
    "review_key": "",
    "link": "https://quicken.sjv.io/15ZBQa",
    "logo": "/data/images/quicken-loans.webp",
    "rate": {
      "max": 10,
      "score": "9.7"
    },
    "slogan": "A+ Customer Satisfaction",
    "meritList": [
      {
        "text": "35 years of experience"
      },
      {
        "text": "Fully automated, online process"
      },
      {
        "text": "Pre-approval available"
      }
    ],
    "key_facts": {
      "mortgage_types": "Purchase, Refinance, Jumbo, Fixed, Adjustable, FHA, VA",
      "credit_score": "620",
      "apr": "set by lender",
      "NMLS": "3030"
    },
    "pros": [
      {
        "text": "Couples a fully online application through Rocket Mortgage with mortgage advisers available over the phone."
      },
      {
        "text": "Via Rocket, offers a prequalification estimate within minutes."
      },
      {
        "text": "Rocket's online approval process offers convenience, with online document upload, loan tracking and the ability to generate a custom approval letter."
      }
    ],
    "cons": [
      {
        "text": "Getting a personalized rate requires a hard credit inquiry."
      },
      {
        "text": "Doesn't offer home equity loans or HELOCs."
      },
      {
        "text": "Lender fees can be stout, and the fees aren't offset by particularly low mortgage rates, according to the latest data."
      }
    ]
  },
  {
    "name": "LoanDepot",
    "review_key": "",
    "link": "https://fxo.co/DGxu",
    "logo": "/data/images/loan-depot.png",
    "rate": {
      "max": 10,
      "score": "9.5"
    },
    "slogan": "No Login/Registration Required",
    "meritList": [
      {
        "text": "Has funded over $65 billion in home loans"
      },
      {
        "text": "Clearance in as little as 8 days"
      },
      {
        "text": "Mello smartloan™ digital asset verification"
      }
    ],
    "key_facts": {
      "mortgage_types": "purchase, refinance, adjustable & fixed rates, jumbo & more",
      "credit_score": "620",
      "apr": "depends on type of loan & lender",
      "NMLS": "174457"
    },
    "pros": [
      {
        "text": "Can choose face-to-face interaction by accessing over 150 affiliated loan stores in the United States"
      },
      {
        "text": "Experienced FHA and VA lender"
      },
      {
        "text": "Fannie Mae HomeStyle home improvement and FHA 302K fixer-upper loans available"
      },
      {
        "text": "100% digital asset, employment, and income verification available"
      }
    ],
    "cons": [
      {
        "text": "No home equity line of credit or loan products available"
      },
      {
        "text": "USDA Rural Development loans not available"
      }
    ]
  },
  {
    "name": "Rocket Mortgage",
    "review_key": "",
    "link": "https://www.rocketmortgage.com/",
    "logo": "/data/images/rocket_mortgage.webp",
    "rate": {
      "max": 10,
      "score": "8.8"
    },
    "slogan": "Discover custom home loan option",
    "meritList": [
      {
        "text": "Get a Verified Approval Letter 2 (VAL)"
      },
      {
        "text": "Access online tools 24/7"
      },
      {
        "text": "See closing costs and tax estimates"
      }
    ],
    "key_facts": {
      "mortgage_types": "Purchase, Refinance, Jumbo, Fixed, Adjustable, FHA, VA, USDA",
      "credit_score": "620",
      "apr": "set by lender",
      "NMLS": "3030"
    },
    "pros": [
      {
        "text": "Caters to self-service users who want to apply for a home loan online and talk to a human only as necessary"
      },
      {
        "text": "Estimates the loan amount you’ll qualify for within minutes"
      },
      {
        "text": "Offers document and asset retrieval capabilities"
      }
    ],
    "cons": [
      {
        "text": "If you’re a “look me in the eye” type of customer, you’re out of luck"
      },
      {
        "text": "Getting a customized interest rate requires a credit check, which can lower your credit score by a few points"
      }
    ]
  },
  {
    "name": "Caliber",
    "review_key": "",
    "link": "https://www.caliberhomeloans.com/",
    "logo": "/data/images/caliber.webp",
    "rate": {
      "max": 10,
      "score": "8.6"
    },
    "slogan": "Simple Solution for Every Step",
    "meritList": [
      {
        "text": "Competitive refinancing rates"
      },
      {
        "text": "Provides great refinancing calculators"
      },
      {
        "text": "Honest rate quotes & access to experts"
      }
    ],
    "key_facts": {
      "mortgage_types": "Purchase, Refinance, Jumbo, Fixed, Adjustable, FHA, VA, USDA",
      "credit_score": "620",
      "apr": "set by lender",
      "NMLS": "3030"
    },
    "pros": [
      {
        "text": "Offers extensive educational resources for military borrowers"
      },
      {
        "text": "Provides digital tools for a streamlined application process"
      },
      {
        "text": "Participates in some state down payment assistance and first-time home buyer programs"
      }
    ],
    "cons": [
      {
        "text": "No mortgage rates displayed online"
      },
      {
        "text": "Doesn’t offer home equity loans or lines of credit"
      }
    ]
  },
  {
    "name": "Sterns loan",
    "review_key": "",
    "link": "https://stearns.com/",
    "logo": "/data/images/stearns_home_loans.webp",
    "rate": {
      "max": 10,
      "score": "8.5"
    },
    "slogan": "Unlock Your Financial Potential",
    "meritList": [
      {
        "text": "Provides great refinancing calculators"
      },
      {
        "text": "An all-digital app, no hassle"
      },
      {
        "text": "Dedicated support team"
      }
    ],
    "key_facts": {
      "mortgage_types": "Purchase, Refinance, Jumbo, Fixed, Adjustable, FHA, VA, USDA",
      "credit_score": "620",
      "apr": "dependent on loan type",
      "NMLS": "1854"
    },
    "pros": [
      {
        "text": "Offers extensive educational resources for military borrowers"
      },
      {
        "text": "Provides digital tools for a streamlined application process"
      },
      {
        "text": "Participates in some state down payment assistance and first-time home buyer programs"
      }
    ],
    "cons": [
      {
        "text": "No mortgage rates displayed online"
      },
      {
        "text": "Doesn’t offer home equity loans or lines of credit"
      }
    ]
  }

];
let payday_loan_data = [
  {
    "name": "Personalloans.com",
    "logo": "/data/images/personal-loans.jpeg",
    "link": "https://personalloans.com/?aid=13342&cid=3818&note={SUBID}&atrk={CLICK_ID}",
    "interest": "5.99%-35.99%",
    "term": "3-72 months",
    "loan_amount": "$1,000-$35,000",
    "score": 5,
    "features": [
      {
        "text": "Our service is free to use"
      },
      {
        "text": "Get funding fast, directly to your account"
      },
      {
        "text": "Request a loan for any occasion"
      },
      {
        "text": "Competitive Rates Available"
      },
      {
        "text": "Privacy, security, 24/7 service"
      }
    ],
    "desc": "PersonalLoans.com <strong style=\"font-weight: 700; color: #000;\">does not charge any fee</strong> or cost to submit a loan request and there is no obligation to agree to the terms of any loan offer presented to you."
  },
  {
    "name": "Bad Credit Loan",
    "logo": "/data/images/bad-credit-loans.webp",
    "link": "https://www.badcreditloans.com/?aid=13342&cid=3818&note={SUBID}&atrk={CLICK_ID}",
    "interest": "5.99%-35.99%",
    "term": "3-72 months",
    "loan_amount": "$500-$10,000",
    "score": 4.5,
    "features": [
      {
        "text": "Easy to apply, all online"
      },
      {
        "text": "Get connected with a lender"
      },
      {
        "text": "Simple form & quick funding"
      },
      {
        "text": "Get your money as soon as next the business day, if approved"
      }
    ],
    "desc": "Representative Example: Borrow $2,000 for 12 months with a 19.9% representative APR and a monthly repayment of $183.63. Total repayment will be $2,203.56."
  },
  {
    "name": "CashUSA.com",
    "logo": "/data/images/cash-usa.webp",
    "link": "https://www.cashusa.com/?aid=13342&cid=3818&note={SUBID}&atrk={CLICK_ID}",
    "interest": "5.99%-35.99%",
    "term": "3-72 months",
    "loan_amount": "$500-$10,000",
    "score": 4.5,
    "features": [
      {
        "text": "Loans from $500 to $10,000"
      },
      {
        "text": "Receive a loan decision in minutes"
      },
      {
        "text": "Get funds directly to your bank account"
      },
      {
        "text": "Use the loan for any purpose"
      }
    ],
    "desc": "Representative Example: If you borrow $1500 over a term of 2 years with a representative APR of 7.9%, you will have 24 monthly payments of $67.77, for a total amount payable of $1626.54"
  },
  {
    "name": "Loan Ploner",
    "logo": "/data/images/loan-ploner.webp",
    "link": "https://www.anrdoezrs.net/click-100176895-13904365",
    "interest": "5.9%-35.99%",
    "term": "3-36 months",
    "loan_amount": "$100-$5,000",
    "score": 4,
    "features": [
      {
        "text": "Safe & secure online form"
      },
      {
        "text": "Fast approval & quick cash"
      },
      {
        "text": "All credit types accepted"
      },
      {
        "text": "Loans for any purpose"
      }
    ],
    "desc": "Representative Example: $1000 loan over a 12-month term. Total cost, including interest, of $1,134.72. APR 29.82%. Rates between 5.9% APR and 35.99% APR. Loan term lengths from 3 to 36 months."
  },
  {
    "name": "Check Into Cash",
    "logo": "/data/images/check-into-cash.webp",
    "link": " https://www.kqzyfj.com/click-100176895-13817190",
    "interest": "varies",
    "term": "varies",
    "loan_amount": "$50-$1,500",
    "score": 4,
    "features": [
      {
        "text": "All credit ratings welcome"
      },
      {
        "text": "Quick, easy & confidential application"
      },
      {
        "text": "Get funds fast"
      },
      {
        "text": "Simple to repay"
      }
    ],
    "desc": "Representative Example: Borrow $2,000 for 12 months with a 19.9% representative APR and a monthly repayment of $183.63. Total repayment will be $2,203.56."
  },
  {
    "name": "Up Lenders",
    "logo": "/data/images/up-lenders.webp",
    "link": " https://secureconv-wh.com/?a=126374&c=256887&mt=4",
    "interest": "5.99%-35.99%",
    "term": "7-day-72 months",
    "loan_amount": "$100-$2,500",
    "score": 3.5,
    "features": [
      {
        "text": "Get a fast loan"
      },
      {
        "text": "Easy online form "
      },
      {
        "text": "Money goes right to your bank"
      }
    ],
    "desc": "Representative Example: If you borrowed $2,000 over a 12 month period and the loan had a 3% origination fee ($60), your monthly repayments would be $189.12, with a total payback amount of $2269.44 which including the 3% fee paid from the loan amount, would have a total cost of $329.44. Representative 29.82% APR."
  }
];
let personal_loans_data = [
  {
    "name": "Credible",
    "review_key": "credible",
    "link": "https://www.credible.com/personal-loan/?utm_source=westwin&utm_medium=referral&utm_campaign=personal_loans&utm_content=",
    "logo": "/data/images/credible.svg",
    "upto": "100000",
    "introduce": "Free to use, no hidden fees",
    "amount": {
      "min": 1000,
      "max": 100000
    },
    "rate": {
      "max": 10,
      "score": "9.9"
    },
    "compare": {
      "credit_score": "600",
      "credit_text": "",
      "apr": {
        "min": "2.49",
        "max": "35.99"
      },
      "term": "24-84 months"
    },
    "key_facts": [
      {
        "text": "Free-to-use marketplace with a choice of vetted lending partners."
      },
      {
        "text": "Borrowers are in control and can compare competitive loan options."
      },
      {
        "text": "No prepayment fees and origination fees as low as 0%"
      },
      {
        "text": "Max Loan Amount: $100K"
      }
    ],
    "disclaimer": "Credible Disclaimer: “Personal Loans Rate and Terms Disclosure: Rates for personal loans provided by lenders on the Credible platform range between 2.49-35.99% APR with terms from 24 to 84 months. Rates presented include lender discounts for enrolling in autopay and loyalty programs, where applicable. Actual rates may be different from the rates advertised and/or shown and will be based on the lender’s eligibility criteria, which include factors such as credit score, loan amount, loan term, credit usage and history, and vary based on loan purpose. The lowest rates available typically require excellent credit, and for some lenders, may be reserved for specific loan purposes and/or shorter loan terms. The origination fee charged by the lenders on our platform ranges from 0% to 8%. Each lender has their own qualification criteria with respect to their autopay and loyalty discounts (e.g., some lenders require the borrower to elect autopay prior to loan funding in order to qualify for the autopay discount). All rates are determined by the lender and must be agreed upon between the borrower and the borrower’s chosen lender. For a loan of $10,000 with a three year repayment period, an interest rate of 7.99%, a $350 origination fee and an APR of 11.51%, the borrower will receive $9,650 at the time of loan funding and will make 36 monthly payments of $313.32. Assuming all on-time payments, and full performance of all terms and conditions of the loan contract and any discount programs enrolled in included in the APR/interest rate throughout the life of the loan, the borrower will pay a total of $11,279.43. As of March 12, 2019, none of the lenders on our platform require a down payment nor do they charge any prepayment penalties.”"
  },
  {
    "name": "Best Egg",
    "review_key": "",
    "link": "https://www.credible.com/a/bestegg-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=bestegg_pl&utm_content=",
    "logo": "/data/images/best_egg.png",
    "upto": "1000000",
    "introduce": "Get funding in as little as 1 day",
    "amount": {
      "min": "50000",
      "max": "Infinity"
    },
    "rate": {
      "max": 10,
      "score": "9.8"
    },
    "compare": {
      "credit_score": "600",
      "credit_text": "",
      "apr": {
        "min": "5.99",
        "max": "29.99"
      },
      "term": "36-60 months"
    },
    "key_facts": [
      {
        "text": "Competitive rates among fair-credit lenders."
      },
      {
        "text": "Able to fund loans within one business day."
      },
      {
        "text": "Secured loan option for homeowners."
      },
      {
        "text": "Max Loan Amount: $50K"
      }
    ],
    "disclaimer": "Best Egg loans are unsecured personal loans made by Cross River Bank, a New Jersey State Chartered Commercial Bank, Member FDIC. Equal Housing Lender. “Best Egg” is a trademark of Marlette Funding, LLC. All uses of “Best Egg” refer to “the Best Egg personal loan” and/or “Best Egg on behalf of Cross River Bank, as originator of the Best Egg personal loan,” as applicable.<br/> The term, amount and APR of any loan we offer to you will depend on your credit score, income, debt payment obligations, loan amount, credit history and other factors. If offered, your loan agreement will contain specific terms and conditions. The timing of available funds upon loan approval may vary depending upon your bank’s policies.<br/> Loan amounts range from $2,000–$50,000. Residents of Massachusetts have a minimum loan amount of $6,500; New Mexico and Ohio, $5,000; and Georgia, $3,000. For a second Best Egg loan, your total existing Best Egg loan balances cannot exceed $50,000.<br/> Best Egg loans can be repaid at any time without penalty. Barring any unforeseen circumstances, Best Egg loans have a minimum term of 36 months and a maximum term of 60 months."
  },
  {
    "name": "Lending Club",
    "review_key": "",
    "link": "https://www.credible.com/a/lendingclub-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=lendingclub_pl&utm_content=",
    "logo": "/data/images/lendingclub.svg",
    "upto": "1000000",
    "introduce": "Choice for debt consolidation",
    "amount": {
      "min": 1000,
      "max": 40000
    },
    "rate": {
      "max": 10,
      "score": "9.6"
    },
    "compare": {
      "credit_score": "600",
      "credit_text": "",
      "apr": {
        "min": "8.05",
        "max": "25.89"
      },
      "term": "36-60 months"
    },
    "key_facts": [
      {
        "text": "One of the largest P2P lending partners & investing companies"
      },
      {
        "text": "15-day grace period for late fees"
      },
      {
        "text": "Apply in just minutes and receive competitive offers"
      },
      {
        "text": "Max Loan Amount: $40K"
      }
    ],
    "disclaimer": "A representative example of loan payment terms is as follows: you receive a loan of $13,411 for a term of 36 months, with an interest rate of 12.16% and a 5.30% origination fee of $711, for an APR of 15.99%. In this example, you will receive $12,700 and will make 36 monthly payments of $446.46. Loan amounts range from $1,000 to $40,000 and loan term lengths are 36 months or 60 months. Some amounts and term lengths may be unavailable in certain states. APR ranges from 8.05% to 35.89% and is determined at the time of application. Origination fee ranges from 3% to 6% of the loan amount. Lowest APR is available to borrowers with excellent credit. Advertised rates are subject to change without notice. Loans are made by LendingClub Bank, N.A., Member FDIC, Equal Housing Lender (“LendingClub Bank”), a wholly-owned subsidiary of LendingClub Corporation, NMLS ID 167439. LendingClub Bank is not an affiliate of [PARNTER LEGAL NAME] and is not responsible for the products and services provided by [PARNTER NICKNAME]. Loans are subject to credit approval and sufficient investor commitment before they can be funded or issued. Certain information that LendingClub Bank subsequently obtains as part of the application process (including but not limited to information in your consumer report, your income, the loan amount that your request, the purpose of your loan, and qualifying debt) will be considered and could affect your ability to obtain a loan. Loan closing is contingent on accepting all required agreements and disclosures at Lendingclub.com. “LendingClub” is a trademark of LendingClub Bank."
  },
  {
    "name": "LightStream",
    "review_key": "lightstream",
    "link": "https://www.credible.com/a/lightstream-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=lightstream_pl&utm_content=",
    "logo": "/data/images/lightstream.svg",
    "upto": "1000000",
    "introduce": "Low fixed rates ",
    "amount": {
      "min": 5000,
      "max": 100000
    },
    "rate": {
      "max": 10,
      "score": "9.3"
    },
    "compare": {
      "credit_score": "660",
      "credit_text": "",
      "apr": {
        "min": "3.49",
        "max": "19.99"
      },
      "term": "24-84 months"
    },
    "key_facts": [
      {
        "text": "Good credit gets low rates and zero fees"
      },
      {
        "text": "Fast and easy online process"
      },
      {
        "text": "$100 Loan Experience Guarantee¹"
      },
      {
        "text": "Max Loan Amount: $100K"
      }
    ],
    "disclaimer": "*Your loan terms, including APR, may differ based on loan purpose, amount, term length, and your credit profile. Lowest rates require excellent credit. Rateis quoted with AutoPay discount. AutoPay discount is only available prior to loan funding. Rates without AutoPay are 0.50% points higher. Subject to credit approval. Conditions and limitations apply. Advertised rates and terms are subject to change without notice. Payment example: Monthly payments for a $10,000 loan at 4.99% APR with a term of 3 years would result in 36 monthly payments of $299.66. 1After receiving your loan from us, if you are not completely satisfied with your experience, please contact us. We will email you a questionnaire so we can improve our services. When we receive your completed questionnaire, we will send you $100. Our guarantee expires 30 days after you receive your loan. We reserve the right to change or discontinue our guarantee at any time. Limited to one $100 payment per funded loan. Truist teammates do not qualify for the Loan Experience Guarantee. Truist Bank is an Equal Housing Lender. © 2021 Truist Financial Corporation. SunTrust, Truist, LightStream, the LightStream logo, and the SunTrust logo are service marks of Truist Financial Corporation. All other trademarks are the property of their respective owners. Lending services provided by Truist Bank."
  },
  {
    "name": "PersonalLoans",
    "review_key": "personalloans",
    "link": "https://personalloans.com/?aid=13342&cid=3818&note={SUBID}&atrk={CLICK_ID}",
    "logo": "/data/images/personal.png",
    "upto": "1000000",
    "introduce": "Excellent customer service",
    "amount": {
      "min": 1000,
      "max": 35000
    },
    "rate": {
      "max": 10,
      "score": "9.0"
    },
    "compare": {
      "credit_score": "500",
      "credit_text": "",
      "apr": {
        "min": "5.99",
        "max": "35.99"
      },
      "term": "3-72 months"
    },
    "key_facts": [
      {
        "text": "Fast funding - 1 business day"
      },
      {
        "text": "Quick and simple online process"
      },
      {
        "text": "Large lender network"
      },
      {
        "text": "Max Loan Amount: $35K"
      }
    ],
    "disclaimer": "The Annual Percentage Rate (APR) is the rate at which your loan accrues interest and is based upon the amount, cost and term of your loan, repayment amounts and timing of payments. APR range for lenders in our network can generally range from 5.99% to 35.89%, with loan terms from 61 days to 96 months. Your actual rate will depend upon your credit score, loan amount, loan term, and credit usage and history. Some states have laws limiting the APR that a lender can charge you. Lenders are legally required to show you the APR and other terms of your loan before you execute a loan agreement."
  },
  {
    "name": "Upgrade",
    "review_key": "",
    "link": "https://www.credible.com/a/upgrade-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=upgrade_pl&utm_content=",
    "logo": "/data/images/upgrade.png",
    "upto": "1000000",
    "introduce": "No fees",
    "amount": {
      "min": 1000,
      "max": 35000
    },
    "rate": {
      "max": 10,
      "score": "8.8"
    },
    "compare": {
      "credit_score": "670",
      "credit_text": "",
      "apr": {
        "min": "7.99",
        "max": "35.97"
      },
      "term": "12-84 months"
    },
    "key_facts": [
      {
        "text": "Allows secured, co-signed and joint loans."
      },
      {
        "text": "Offers rate discount with direct payment to creditors on debt consolidation loans."
      },
      {
        "text": "Rate discount for autopay."
      },
      {
        "text": "Max Loan Amount: $50K"
      }
    ],
    "disclaimer": "* Earn unlimited 1.5% cash back on all purchases when you pay them back. Your cash back will typically be applied to your balance after your next scheduled monthly payment. Cash back rewards applied to your balance will not satisfy or reduce your regular monthly payments. Payments on non-purchase transactions, such as sending funds electronically to your bank account, are not eligible to earn rewards. Certain limitations apply. Please refer to your Cardholder Agreement for more information. Rewards associated with the Upgrade Card, when applicable, are provided by Upgrade, Inc.<br/> ** Credit Lines opened through Upgrade feature APRs of 8.99% - 29.99% and line amounts ranging $500 - $50,000. The lowest rates require Autopay and the majority of the line amounts will be $25,000 or under. For example, a $5,000 transaction with a 36 month term and a 19.99% APR has a required monthly payment of $187.90. The APR on your draw may be higher or lower. Your rate, line amount, and default term depend on maintaining a qualifying credit score, your credit usage history, requested amount, and other factors."
  },
  {
    "name": "Avant",
    "review_key": "avant",
    "link": "https://www.credible.com/a/avant-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=avant_pl&utm_content=",
    "logo": "/data/images/avant.png",
    "upto": "1000000",
    "introduce": "Clear and transparent process",
    "amount": {
      "min": 2000,
      "max": 35000
    },
    "rate": {
      "max": 10,
      "score": "8.5"
    },
    "compare": {
      "credit_score": "580",
      "credit_text": "",
      "apr": {
        "min": "9.95",
        "max": "35.99"
      },
      "term": "24-60 months"
    },
    "key_facts": [
      {
        "text": "Approval/funding in 2-3 business day"
      },
      {
        "text": "No repayment fees"
      },
      {
        "text": "Low credit score requirement: 580"
      },
      {
        "text": "Max Loan Amount: $50K"
      }
    ],
    "disclaimer": "Loan amounts range from $2,000 to $35,000. APR ranges from 9.95% to 35.99%.<br/> Loan lengths range from 24 to 60 months. Administration fee up to 4.75%.<br/> * The actual loan amount, term, and APR amount of loan that a customer qualifies for may vary based on credit determination and state law. Minimum loan amounts vary by state. <br/>** Example: A $5,700 loan with an administration fee of 4.75% and an amount financed of $5,429.25, repayable in 36 monthly installments, would have an APR of 29.95% and monthly payments of $230.33."
  },
  {
    "name": "SoFi",
    "review_key": "sofi",
    "link": "https://www.credible.com/a/sofi-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=sofi_pl&utm_content=",
    "logo": "/data/images/sofi.svg",
    "upto": "1000000",
    "introduce": "Prequalify for your rate in 3 minutes",
    "amount": {
      "min": 5000,
      "max": 100000
    },
    "rate": {
      "max": 10,
      "score": "8.3"
    },
    "compare": {
      "credit_score": "680",
      "credit_text": "",
      "apr": {
        "min": "5.99",
        "max": "18.85"
      },
      "term": "24-84 months"
    },
    "key_facts": [
      {
        "text": "Competitive rates available for good credit scores and income source"
      },
      {
        "text": "Access to financial advisors, private networking events, & unemployment protection"
      },
      {
        "text": "Flexible terms & payment options with no fees whatsoever"
      },
      {
        "text": "Max Loan Amount: $100K"
      }
    ],
    "disclaimer": "Sofi Disclaimer: “Fixed rates from 5.99% APR to 16.99% APR (with AutoPay). Variable rates from 5.74% APR to 14.70% APR (with AutoPay). SoFi rate ranges are current as of March 18, 2019 and are subject to change without notice. Not all rates and amounts available in all states. See Personal Loan eligibility details. Not all applicants qualify for the lowest rate. If approved for a loan, to qualify for the lowest rate, you must have a responsible financial history and meet other conditions. Your actual rate will be within the range of rates listed above and will depend on a variety of factors, including evaluation of your credit worthiness, years of professional experience, income and other factors. See APR examples and terms. Interest rates on variable rate loans are capped at 14.95%. Lowest variable rate of 5.74% APR assumes current 1-month LIBOR rate of 2.49% plus 4.28% margin minus 0.25% AutoPay discount. For the SoFi variable rate loan, the 1-month LIBOR index will adjust monthly and the loan payment will be re-amortized and may change monthly. APRs for variable rate loans may increase after origination if the LIBOR index increases. The SoFi 0.25% AutoPay interest rate reduction requires you to agree to make monthly principal and interest payments by an automatic monthly deduction from a savings or checking account. The benefit will discontinue and be lost for periods in which you do not pay by automatic deduction from a savings or checking account. Loan example: A $6,000 loan with a 24.99% APR that is repayable in 60 monthly installments would have monthly payments of $176.07 to a total of $10,565.2”"
  }
];
let personal_loans_2022 = [
  {
    "name": "credible",
    "review_key": "credible",
    "link": "https://www.credible.com/personal-loan/?utm_source=westwin&utm_medium=referral&utm_campaign=personal_loans",
    "logo": "/data/images/credible.webp",
    "upto": "100000",
    "introduce": "Free to use, no hidden fees",
    "amount": {
      "min": 1000,
      "max": 100000
    },
    "rate": {
      "max": 10,
      "score": "9.9"
    },
    "compare": {
      "credit_score": "600",
      "credit_text": "",
      "apr": {
        "min": "2.49",
        "max": "35.99"
      },
      "term": "12-84 months"
    },
    "disclaimer": ""
  },
  {
    "name": "lightstream",
    "review_key": "lightstream",
    "link": "https://www.credible.com/a/lightstream-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=lightstream_pl",
    "logo": "/data/images/lightstream.webp",
    "upto": "1000000",
    "introduce": "Low fixed rates ",
    "amount": {
      "min": 5000,
      "max": 100000
    },
    "rate": {
      "max": 10,
      "score": "9.8"
    },
    "compare": {
      "credit_score": "660",
      "credit_text": "",
      "apr": {
        "min": "3.49",
        "max": "19.99"
      },
      "term": "24-84 months"
    },
    "disclaimer": ""
  },
  {
    "name": "avant",
    "review_key": "avant",
    "link": "https://www.credible.com/a/avant-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=avant_pl",
    "logo": "/data/images/avant.webp",
    "upto": "1000000",
    "introduce": "Clear and transparent process",
    "amount": {
      "min": 2000,
      "max": 35000
    },
    "rate": {
      "max": 10,
      "score": "9.6"
    },
    "compare": {
      "credit_score": "580",
      "credit_text": "",
      "apr": {
        "min": "9.95",
        "max": "35.99"
      },
      "term": "24-60 months"
    },
    "disclaimer": ""
  },
  {
    "name": "sofi",
    "review_key": "sofi",
    "link": "https://www.credible.com/a/sofi-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=sofi_pl",
    "logo": "/data/images/sofi.webp",
    "upto": "1000000",
    "introduce": "Prequalify for your rate in 3 minutes",
    "amount": {
      "min": 5000,
      "max": 100000
    },
    "rate": {
      "max": 10,
      "score": "9.5"
    },
    "compare": {
      "credit_score": "680",
      "credit_text": "",
      "apr": {
        "min": "5.99",
        "max": "18.85"
      },
      "term": "24-84 months"
    },
    "disclaimer": ""
  },
  {
    "name": "lendingclub",
    "review_key": "",
    "link": "https://www.credible.com/a/lendingclub-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=lendingclub_pl",
    "logo": "/data/images/lendingclub.webp",
    "upto": "1000000",
    "introduce": "Choice for debt consolidation",
    "amount": {
      "min": 1000,
      "max": 40000
    },
    "rate": {
      "max": 10,
      "score": "8.8"
    },
    "compare": {
      "credit_score": "600",
      "credit_text": "",
      "apr": {
        "min": "8.05",
        "max": "25.89"
      },
      "term": "36-60 months"
    },
    "disclaimer": ""
  },
  {
    "name": "upgrade",
    "review_key": "",
    "link": "https://www.credible.com/a/upgrade-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=upgrade_pl",
    "logo": "/data/images/upgrade.webp",
    "upto": "1000000",
    "introduce": "No fees",
    "amount": {
      "min": 1000,
      "max": 35000
    },
    "rate": {
      "max": 10,
      "score": "8.5"
    },
    "compare": {
      "credit_score": "670",
      "credit_text": "",
      "apr": {
        "min": "7.99",
        "max": "35.97"
      },
      "term": "36-60 months"
    },
    "disclaimer": ""
  },
  {
    "name": "best_egg",
    "review_key": "",
    "link": "https://www.credible.com/a/bestegg-pl/?utm_source=westwin&utm_medium=referral&utm_campaign=bestegg_pl",
    "logo": "/data/images/best_egg.webp",
    "upto": "1000000",
    "introduce": "Get funding in as little as 1 day",
    "amount": {
      "min": "50000",
      "max": "Infinity"
    },
    "rate": {
      "max": 10,
      "score": "8.3"
    },
    "compare": {
      "credit_score": "600",
      "credit_text": "",
      "apr": {
        "min": "5.99",
        "max": "29.99"
      },
      "term": "36-60 months"
    },
    "disclaimer": ""
  },
  {
    "name": "Marcus",
    "review_key": "marcus",
    "link": "https://click.linksynergy.com/fs-bin/click?id=tKghxKc1Ct0&offerid=663242.3&type=3&subid=0",
    "logo": "/data/images/marcus.webp",
    "upto": "1000000",
    "introduce": "No sign-up & repayment fees",
    "amount": {
      "min": 3500,
      "max": 40000
    },
    "rate": {
      "max": 10,
      "score": "7.8"
    },
    "compare": {
      "credit_score": "720",
      "credit_text": "600 minimum VantageScore® 3.0 and 660 minimum FICO® 9.0.",
      "apr": {
        "min": "6.99",
        "max": "19.99"
      },
      "term": "36-72 months"
    },
    "disclaimer": "Marcus by Goldman Sachs Terms & Conditions: Your loan terms are not guaranteed and are subject to our verification of your identity and credit information. To obtain a loan, you must submit additional documentation including an application that may affect your credit score. The availability of a loan offer and the terms of your actual offer will vary due to a number of factors, including your loan purpose and our evaluation of your creditworthiness. Rates will vary based on many factors, such as your creditworthiness (for example, credit score and credit history) and the length of your loan (for example, rates for 36 month loans are generally lower than rates for 72 month loans). Your maximum loan amount may vary depending on your loan purpose, income and creditworthiness. Your verifiable income must support your ability to repay your loan. Marcus by Goldman Sachs is a brand of Goldman Sachs Bank USA and all loans are issued by Goldman Sachs Bank USA, Salt Lake City Branch. Applications are subject to additional terms and conditions. Receive an APR reduction when you enroll in AutoPay. This reduction will not be applied if AutoPay is not in effect. When enrolled, a larger portion of your monthly payment will be applied to your principal loan amount and less interest will accrue on your loan, which may result in a smaller final payment. See loan agreement for details."
  }
];
let best_personal_loan = [
  {
    name: 'goodloans',
    link: 'https://www.credible.com/personal-loan?utm_source=westwin&utm_medium=referral&utm_campaign=pl_fb&utm_content='
  },
  {
    name: 'poorloans',
    link: 'https://personalloans.com/?aid=13342&cid=3818&note={SUBID}&atrk={CLICK_ID}'
  }
]
let online_personal_loans_data = [{name: 'main', link: 'https://secureconv-wh.com/?a=126374&c=279173&mt=4'}]

let credible_mortgage_loan_review = [{
  name: 'main',
  link: 'https://www.credible.com/mortgage?utm_source=westwin&utm_medium=referral&utm_campaign=mortgage_purchase&utm_content='
}]

let best_mortgage_loan = [{
  name: 'main',
  link: 'https://www.credible.com/mortgage-refinance?utm_source=westwin&utm_medium=referral&utm_campaign=mortgage_refi&utm_content='
}]

let best_refinance_mortgage_loan = [{
  name: 'main',
  link: 'https://www.credible.com/mortgage-refinance?utm_source=westwin&utm_medium=referral&utm_campaign=mortgage_refi&utm_content='
}]
export default {
  layout: 'white',
  methods: {
    changeLink(url) {
      let gclid = this.$route.query['gclid'];
      if (!gclid || typeof gclid === 'undefined') {
        return `${url}&gclid=${gclid}&term_content=google&utm_content=google`
      } else {
        return `${url}`;
      }
    },
    handleJump(data, name) {
      let filterData = data.filter(ele => {
        return ele.name == name;
      })

      if (filterData.length > 0) {

        filterData.forEach(ele => {
          ele.link = this.changeLink(ele.link);
        })
        if (process.client) {
          window.location.href = filterData[0].link;
        }

      } else {
        this.$router.push('/error')
      }
    }
  },
  created() {
    let {url, name} = this.$route.params;
    if (url === 'personal-loan') {
      this.handleJump(personal_data, name);
    } else if (url === 'student-loan') {
      this.handleJump(student_data, name);
    } else if (url === 'mortgage-loan') {
      let {category} = this.$route.query;

      if (category == 'purchase') {
        this.handleJump(mortgage_purchase, name);
      } else if (category == 'refinance') {
        this.handleJump(mortgage_refinance, name);
      } else {
        this.$router.push('/error');
      }
    } else if (url === 'payday-loans') {
      this.handleJump(payday_loan_data, name);
    } else if (url === 'personal-loans') {
      this.handleJump(personal_loans_data, name);
    } else if (url === 'online-personal-loans') {
      this.handleJump(online_personal_loans_data, name);
    } else if (url === 'credible-mortgage-loan-review') {
      this.handleJump(credible_mortgage_loan_review, name);
    } else if (url === 'best-mortgage-loan') {
      this.handleJump(best_mortgage_loan, name)
    } else if (url === 'best-refinance-mortgage-loan') {
      this.handleJump(best_refinance_mortgage_loan, name);
    } else if (url === 'best-personal-loans-2022') {
      this.handleJump(personal_loans_2022, name)
    } else if (url === 'best-personal-loan') {
      this.handleJump(best_personal_loan, name)
    } else {

      this.$router.push('/error')
    }


  }
}
</script>

<style>

</style>
