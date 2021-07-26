const { createInvoice } = require('./createInvoice');

const invoice = {
    shipping: {
        name: 'John Doe',
        address: '1234 Main Street',
        city: 'San Francisco',
        state: 'CA',
        country: 'US',
        postal_code: 94111
    },
    items: [
        {
            item: 'Show',
            description: 'Regular Show',
            quantity: 12,
            amount: 30000
        },
    ],
    subtotal: 30000,
    paid: 0,
    invoice_nr: 1234
};

createInvoice(invoice, 'invoice.pdf');
