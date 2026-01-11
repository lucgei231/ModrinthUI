// This file contains functions for interacting with Modrinth's API.

const API_BASE_URL = 'https://api.modrinth.com/v2';

// Helper function to get token from localStorage
function getToken() {
    return localStorage.getItem('modrinth_pat');
}

// Function to fetch user data
async function getUserData() {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/user`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
}

// Function to update user data
async function updateUserData(userData) {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/user`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    return response.json();
}

// Function to fetch notifications
async function getNotifications() {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/notifications`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
}

// Function to create a new notification
async function createNotification(notificationData) {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/notifications`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(notificationData)
    });
    return response.json();
}

// Function to fetch payout information
async function getPayouts() {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/payouts`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    return response.json();
}

// Function to create a new payout
async function createPayout(payoutData) {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/payouts`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payoutData)
    });
    return response.json();
}

// Function to fetch analytics data
async function getAnalytics() {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/analytics`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    return response.json();
}

// Function to search projects
async function searchProjects(query, facets = []) {
    const params = new URLSearchParams({ query });
    if (facets.length) params.set('facets', JSON.stringify(facets));
    const response = await fetch(`${API_BASE_URL}/search?${params}`);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
}

// Function to get project details
async function getProject(id) {
    const response = await fetch(`${API_BASE_URL}/project/${id}`);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return response.json();
}

// Function to get project versions
async function getProjectVersions(id) {
    const response = await fetch(`${API_BASE_URL}/project/${id}/version`);
    return response.json();
}

// Function to get version details
async function getVersion(id) {
    const response = await fetch(`${API_BASE_URL}/version/${id}`);
    return response.json();
}

// Function to download version file
async function downloadVersion(url) {
    window.open(url, '_blank');
}

// Function to manage projects (create, update, delete)
async function manageProject(projectData, method = 'POST') {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/project`, {
        method: method,
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projectData)
    });
    return response.json();
}

// Function to manage project versions
async function manageVersion(versionData, method = 'POST') {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/version`, {
        method: method,
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(versionData)
    });
    return response.json();
}

// Function to get versions
async function getVersions() {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/versions`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    return response.json();
}

// Function to manage reports
async function manageReport(reportData, method = 'POST') {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/report`, {
        method: method,
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reportData)
    });
    return response.json();
}

// Function to get reports
async function getReports() {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/reports`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    return response.json();
}

// Function to manage threads
async function manageThread(threadData, method = 'POST') {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/thread`, {
        method: method,
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(threadData)
    });
    return response.json();
}

// Function to get threads
async function getThreads() {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/threads`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    return response.json();
}

// Function to manage collections
async function manageCollection(collectionData, method = 'POST') {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/collection`, {
        method: method,
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(collectionData)
    });
    return response.json();
}

// Function to get collections
async function getCollections() {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/collections`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    return response.json();
}

// Function to manage organizations
async function manageOrganization(organizationData, method = 'POST') {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/organization`, {
        method: method,
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(organizationData)
    });
    return response.json();
}

// Function to get organizations
async function getOrganizations() {
    const token = getToken();
    if (!token) throw new Error('No token found');
    const response = await fetch(`${API_BASE_URL}/organizations`, {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    });
    return response.json();
}
