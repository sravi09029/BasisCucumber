$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "MyAccountLogin",
  "description": "\t\t\t\t\t\r\nIn order to perform successful login\r\nAs a user\r\nI want to enter correct username and passowrd",
  "id": "myaccountlogin",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Functional"
    },
    {
      "line": 1,
      "name": "@prodnew"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "check the Login functionality with valid credentials",
  "description": "",
  "id": "myaccountlogin;check-the-login-functionality-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "user open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user navigates url",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user clicks MyAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user entered \"\u003cusername\u003e\" username",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user entered \"\u003cpassword\u003e\" password",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user select the age category",
  "rows": [
    {
      "cells": [
        "Age",
        "Location"
      ],
      "line": 15
    },
    {
      "cells": [
        "above 18",
        "India"
      ],
      "line": 16
    },
    {
      "cells": [
        "below 18",
        "USA"
      ],
      "line": 17
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user clicks login button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user \"\u003cloginType\u003e\" successfully logged in",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "myaccountlogin;check-the-login-functionality-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "loginType"
      ],
      "line": 22,
      "id": "myaccountlogin;check-the-login-functionality-with-valid-credentials;;1"
    },
    {
      "cells": [
        "valid",
        "valid",
        "shouldbe"
      ],
      "line": 23,
      "id": "myaccountlogin;check-the-login-functionality-with-valid-credentials;;2"
    },
    {
      "cells": [
        "invalid",
        "invalid",
        "shouldnot"
      ],
      "line": 24,
      "id": "myaccountlogin;check-the-login-functionality-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.uri("LoginToProduction.feature");
formatter.feature({
  "line": 2,
  "name": "Login to Production",
  "description": "\r\nIn order to perform successful login to production\r\nAs a user\r\nI want to enter correct username and passowrd",
  "id": "login-to-production",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@bvt"
    },
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@prod"
    }
  ]
});
});