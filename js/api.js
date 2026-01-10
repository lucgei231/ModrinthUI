// This file contains functions for interacting with Modrinth's API.

const API_BASE_URL = 'https://api.modrinth.com/v1';

// Function to fetch user data
async function fetchUserData(token) {
    const response = await fetch(`${API_BASE_URL}/user`, {
        headers: {
            'Authorization': token
        }
    });
    return response.json();
}

// Function to fetch notifications
async function fetchNotifications(token) {
    const response = await fetch(`${API_BASE_URL}/notifications`, {
        headers: {
            'Authorization': token
        }
    });
    return response.json();
}

// Function to create a new notification
async function createNotification(token, notificationData) {
    const response = await fetch(`${API_BASE_URL}/notifications`, {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(notificationData)
    });
    return response.json();
}

// Function to fetch payout information
async function fetchPayouts(token) {
    const response = await fetch(`${API_BASE_URL}/payouts`, {
        headers: {
            'Authorization': token
        }
    });
    return response.json();
}

// Function to create a new payout
async function createPayout(token, payoutData) {
    const response = await fetch(`${API_BASE_URL}/payouts`, {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payoutData)
    });
    return response.json();
}

// Function to fetch analytics data
async function fetchAnalytics(token) {
    const response = await fetch(`${API_BASE_URL}/analytics`, {
        headers: {
            'Authorization': token
        }
    });
    return response.json();
}

// Function to manage projects
async function manageProject(token, projectData, method = 'GET') {
    const response = await fetch(`${API_BASE_URL}/projects`, {
        method: method,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: method !== 'GET' ? JSON.stringify(projectData) : null
    });
    return response.json();
}

// Function to manage project versions
async function manageVersion(token, versionData, method = 'GET') {
    const response = await fetch(`${API_BASE_URL}/versions`, {
        method: method,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: method !== 'GET' ? JSON.stringify(versionData) : null
    });
    return response.json();
}

// Function to manage reports
async function manageReport(token, reportData, method = 'GET') {
    const response = await fetch(`${API_BASE_URL}/reports`, {
        method: method,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: method !== 'GET' ? JSON.stringify(reportData) : null
    });
    return response.json();
}

// Function to manage threads
async function manageThread(token, threadData, method = 'GET') {
    const response = await fetch(`${API_BASE_URL}/threads`, {
        method: method,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: method !== 'GET' ? JSON.stringify(threadData) : null
    });
    return response.json();
}

// Function to manage collections
async function manageCollection(token, collectionData, method = 'GET') {
    const response = await fetch(`${API_BASE_URL}/collections`, {
        method: method,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: method !== 'GET' ? JSON.stringify(collectionData) : null
    });
    return response.json();
}

// Function to manage organizations
async function manageOrganization(token, organizationData, method = 'GET') {
    const response = await fetch(`${API_BASE_URL}/organizations`, {
        method: method,
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json'
        },
        body: method !== 'GET' ? JSON.stringify(organizationData) : null
    });
    return response.json();
}