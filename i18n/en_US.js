var txtLogin = {
    // labels for login page
    onlineID: 'Online ID',
    email: 'email',
    logIn: 'Log in',
    logOut: 'Logged out successfully',
    password: 'Password',
    passwordConfirm: 'Confirm Password',
    errOnlineID: 'OnlineID is required',
    errEmail: 'Email is required',
    errPasswordRequired: 'Password is required',
    errPasswordDifferent: 'Passwords Do Not Match!',
    errPasswordInvalid: 'Minimum length is 5 characters.',
    errPassword: 'Minimum length is 55 characters.',
    btnLogin: 'Login',
    btnRegister: 'Register',
    btnLogout: 'Logout',
    btnPasswordHelp: 'Need Login Help?',
    credentialsValid: 'You are now logged in.',
    credentialsInvalid: 'The email or password you have entered is invalid.',
    registrationSuccess: 'Your request has been received.  Look for email confirmation soon.',
    registrationSent: 'Processing your request',
    registerPageTitle: 'Register'
};

var txtNavigation = {
    brandName: 'Forms Builder',
    btnLogin: 'Login',
    btnRegister: 'Register',
    btnLogout: 'Logout'
};

var txtSideMenu = {
    menuDisplayForm: 'Display Form Definition',
    menuUploadForm: 'Upload Form',
    menuBuildForm: 'Build Form',
    menuOpenFile: 'Choose Form'
};

var txtProfile = {
    pageTitle: 'Update Your Profile',
    onlineID: 'OnlineID',
    errOnlineID: 'OnlineID required',
    password: 'Password',
    errPasswordRequired: 'Password is required',
    errPasswordDifferent: 'Passwords Do Not Match!',
    errPasswordLength: 'Minimum length is 5 characters.',
    passwordConfirm: 'Confirm Password',
    nameFirst: 'First Name',
    errNameFirst: 'Member first name required',
    nameLast: 'Last Name',
    errNameLast: 'Member last name required.',
    nameBusiness: 'Business Name',
    errNameBusiness: 'Member business name required.',
    occupation: 'Occupation',
    errOccupation: 'Member occupation name required.',
    phonePrimary: 'Phone Number',
    errPhonePrimary: 'Phone Number is required.',
    phoneAlternate: 'Alternate Phone Number',
    email: 'Email Address',
    errEmail: 'Must be a valid email address.',
    comment: 'Comment',
    commentOptional: 'Comments (optional)',
    btnSubmit: 'Update',
    btnCancel: 'Cancel',
    updateSuccessful: 'Profile Updated Successfully',
    btnRegister: 'Register'
}

var txtPrompts = {
    formName: 'Form Name',
    placeholderFormName: 'Enter the Form Name',
    fieldName: 'Field Name',
    placeholderFieldName: 'Enter the Field Name',
    fieldWidth: 'Field Width',
    placeholderFieldWidth: 'Choose A Field Width',
    alignment: 'Alignment',
    placeholderFieldAlignment:'Chose Right, Left, or Overlay',
    OK: 'OK',
    cancel: 'Cancel',
    alignments: [
        {id: 'Left',
         name: 'Left'},
        {id: 'Right',
         name: 'Right'},
        {id: 'Overlay',
         name: 'Overlay'}
    ],
    form: 'Form:',
    contextMessageText: 'You have a decision to make!',
    saveChanges: 'Save Changes',
    discardChanges: 'Discard Changes'
};

var txtCommon = {
    btnDone: 'Done'
};

var txtReviewForm = {
    btnCancel: 'Done',
    pluralsFields: [
        {tag: 'No Fields'},
        {tag: 'Field'},
        {tag: 'Fields'}
    ],
    gridColumnFieldNumber: 'Field Number',
    gridColumnName: 'Field Name',
    gridColumnWidth: 'Width',
    gridColumnAlignment: 'Alignment',
    gridColumnHorizontal: 'Horizontal',
    gridColumnVertical: 'Vertical',
    gridColumnAction: 'Action',
    tooltipDelete: 'Click to delete this field from the form'
};

var markerConfig = {
    size: '10px',
    color: '#000000'
};

var sampleForm = {
    "formName": "Trade Disclosure",
    "formFields": [
        {
            "name": "Sign On Date",
            "width": 1,
            "alignment": "Overlay",
            "fieldNumber": 1,
            "horizontal": 393,
            "vertical": 846
        },
        {
            "name": "Customer Name",
            "width": 1,
            "alignment": "Overlay",
            "fieldNumber": 2,
            "horizontal": 394,
            "vertical": 486
        },
        {
            "name": "Customer Address",
            "width": 1,
            "alignment": "Overlay",
            "fieldNumber": 3,
            "horizontal": 394,
            "vertical": 517
        },
        {
            "name": "Dealer Name",
            "width": 1,
            "alignment": "Overlay",
            "fieldNumber": 4,
            "horizontal": 394,
            "vertical": 548
        },
        {
            "name": "Dealer Address",
            "width": 1,
            "alignment": "Overlay",
            "fieldNumber": 5,
            "horizontal": 394,
            "vertical": 578
        },
        {
            "name": "Year",
            "width": 1,
            "alignment": "Overlay",
            "fieldNumber": 6,
            "horizontal": 394,
            "vertical": 646
        },
        {
            "name": "Lienholder",
            "width": 1,
            "alignment": "Overlay",
            "fieldNumber": 7,
            "horizontal": 456,
            "vertical": 710
        },
        {
            "name": "Make",
            "width": 1,
            "alignment": "Overlay",
            "fieldNumber": 8,
            "horizontal": 480,
            "vertical": 646
        },
        {
            "name": "Model",
            "width": 1,
            "alignment": "Overlay",
            "fieldNumber": 9,
            "horizontal": 644,
            "vertical": 646
        },
        {
            "name": "VIN",
            "width": 1,
            "alignment": "Overlay",
            "fieldNumber": 10,
            "horizontal": 811,
            "vertical": 646
        },
        {
            "name": "N/A Second Trade Signature",
            "width": 1,
            "alignment": "Overlay",
            "fieldNumber": 11,
            "horizontal": 944,
            "vertical": 846
        },
        {
            "name": "Customer Date",
            "width": 10,
            "alignment": "Left",
            "fieldNumber": 12,
            "horizontal": 998,
            "vertical": 517
        },
        {
            "name": "Dealer Date",
            "width": 10,
            "alignment": "Left",
            "fieldNumber": 13,
            "horizontal": 998,
            "vertical": 578
        }
    ]
};

var txtSecurity = {
    required: true,
    schema: 'Schema Name',
    dbPass: 'Database Password',
    btnSubmit: 'Save',
    errSchemaRequired: 'Scnema Name is Required',
    errDbPassRequired: 'Database Password is Requried',
    saveSecurity: 'Schema and Database Password Saved.',
    saveSecurityFailed: "That Didn't Work.  Try Again or Close This WebPage."
};
