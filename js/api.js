const API = {
    BASE_URL: 'httpd://remote-theresita-g-doc69-810a721c.koyeb.app',

    // ---- Admin Login ----
    adminLogin: async (data) => {
        const res = await fetch(`${API.BASE_URL}/admin/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error('Login failed');
        return await res.text();
    },

    // ---- Cars ----
    createCar: async (formData) => {
        const res = await fetch(`${API.BASE_URL}/admin/car/create`, {
            method: 'POST',
            credentials: 'include',
            body: formData // <-- must be FormData
        });
        if (!res.ok) throw new Error('Failed to create car');
        return await res.json();
    },

    getAllCars: async () => {
        const res = await fetch(`${API.BASE_URL}/cars/all`);
        if (!res.ok) throw new Error('Failed to fetch cars');
        return await res.json();
    },

    deleteCar: async (id) => {
        const res = await fetch(`${API.BASE_URL}/admin/car/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });
        if (!res.ok) throw new Error('Failed to delete car');
        return true;
    },

    // ---- Contact Messages ----
    getAllContactMessages: async () => {
        const res = await fetch(`${API.BASE_URL}/admin/contact-message/all`, {
            credentials: 'include'
        });
        if (!res.ok) throw new Error('Failed to fetch messages');
        return await res.json();
    },
    deleteContactMessage: async (id) => {
        const res = await fetch(`${API.BASE_URL}/admin/contact-message/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });
        if (!res.ok) throw new Error('Failed to delete message');
        return true;
    },
    deleteAllContactMessages: async () => {
        const res = await fetch(`${API.BASE_URL}/admin/contact-message/all`, {
            method: 'DELETE',
            credentials: 'include'
        });
        if (!res.ok) throw new Error('Failed to delete all messages');
        return true;
    },

    // ---- Event ----
    createOrReplaceEvent: async (formData) => {
        const res = await fetch(`${API.BASE_URL}/admin/event/create-or-replace`, {
            method: 'POST',
            credentials: 'include',
            body: formData
        });
        if (!res.ok) throw new Error('Failed to create/replace event');
        return true;
    },
    deleteEvent: async () => {
        const res = await fetch(`${API.BASE_URL}/admin/event`, {
            method: 'DELETE',
            credentials: 'include'
        });
        if (!res.ok) throw new Error('Failed to delete event');
        return true;
    },

    // ---- Public Cars ----
    getNewestCars: async () => {
        const res = await fetch(`${API.BASE_URL}/cars/newest`);
        if (!res.ok) throw new Error('Failed to fetch newest cars');
        return await res.json();
    },
    getCarById: async (id) => {
        const res = await fetch(`${API.BASE_URL}/cars/${id}`);
        if (!res.ok) throw new Error('Failed to fetch car');
        return await res.json();
    },

    // ---- Event ----
    getEvent: async () => {
        const res = await fetch(`${API.BASE_URL}/events`);
        if (!res.ok) throw new Error('Failed to fetch event');
        return await res.json();
    },

    // ---- Contact ----
    sendContactMessage: async (data) => {
        const res = await fetch(`${API.BASE_URL}/contact`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error('Failed to send message');
        return await res.json(); // if your backend returns something
    }
};
