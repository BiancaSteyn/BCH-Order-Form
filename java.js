if(subtotal > 0) lines.push(`*Subtotal:* R${formatR(subtotal)}`);
if(date) lines.push(`*Preferred delivery date:* ${date}`);
lines.push('');
lines.push('*Details:*');
lines.push(details || '-');
lines.push('');
if(hasImage.checked) lines.push('(Customer indicated they have images/designs to attach — please attach them in the chat)');
lines.push('');
// Add the estimate clarification here:
lines.push('_Prices shown are estimates and subject to change; the final price will be confirmed before payment._');
lines.push('');
lines.push('Delivery charges are payable by the customer. Please confirm availability and shipping cost. Thank you!');
