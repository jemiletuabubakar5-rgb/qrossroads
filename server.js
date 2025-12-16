    // <script>
    //     // Qrossroads - COMPLETELY FIXED SCANNER VERSION
    //     document.addEventListener('DOMContentLoaded', function() {
            
    //         // Initialize variables
    //         let scannerActive = false;
    //         let videoStream = null;
    //         let currentQRCode = null;
    //         let scanningInterval = null;
            
    //         // DOM elements
    //         const video = document.getElementById('video');
    //         const scannerBtn = document.getElementById('scanner-btn');
    //         const scannerStatus = document.getElementById('scanner-status');
    //         const statusDot = scannerStatus.querySelector('.status-dot');
    //         const statusText = scannerStatus.querySelector('span');
    //         const debugStatus = document.getElementById('debug-status');
    //         const debugVideo = document.getElementById('debug-video');
            
    //         // Tab switching
    //         document.querySelectorAll('.tab').forEach(tab => {
    //             tab.addEventListener('click', function() {
    //                 const tabName = this.getAttribute('data-tab');
    //                 switchTab(tabName);
    //             });
    //         });
            
    //         // Button event listeners
    //         scannerBtn.addEventListener('click', toggleScanner);
    //         document.getElementById('upload-btn').addEventListener('click', uploadQR);
    //         document.getElementById('generate-btn').addEventListener('click', generateQR);
    //         document.getElementById('download-btn').addEventListener('click', downloadQR);
    //         document.getElementById('share-btn').addEventListener('click', shareQR);
    //         document.getElementById('clear-history-btn').addEventListener('click', clearHistory);
    //         document.getElementById('export-btn').addEventListener('click', exportHistory);
    //         document.getElementById('file-input').addEventListener('change', handleFileUpload);
            
    //         // Initialize
    //         loadHistory();
            
    //         // Update debug info
    //         function updateDebugInfo() {
    //             if (debugStatus && debugVideo) {
    //                 debugStatus.textContent = 'Scanner: ' + (scannerActive ? 'Active' : 'Inactive');
    //                 debugVideo.textContent = 'Video: ' + 
    //                     (video.videoWidth ? video.videoWidth + 'x' + video.videoHeight : 'Not loaded');
    //             }
    //         }
            
    //         // Update scanner status UI
    //         function updateScannerStatus(active) {
    //             if (active) {
    //                 scannerStatus.classList.add('active');
    //                 statusDot.classList.add('active');
    //                 statusText.textContent = 'Scanner is active - Point at QR code';
    //             } else {
    //                 scannerStatus.classList.remove('active');
    //                 statusDot.classList.remove('active');
    //                 statusText.textContent = 'Scanner is stopped';
    //             }
    //         }
            
    //         // Tab switching function
    //         function switchTab(tabName) {
    //             // Update tabs
    //             document.querySelectorAll('.tab').forEach(tab => {
    //                 if (tab.getAttribute('data-tab') === tabName) {
    //                     tab.classList.add('active');
    //                 } else {
    //                     tab.classList.remove('active');
    //                 }
    //             });
                
    //             // Update tab contents
    //             document.querySelectorAll('.tab-content').forEach(content => {
    //                 if (content.id === tabName + '-tab') {
    //                     content.classList.add('active');
    //                 } else {
    //                     content.classList.remove('active');
    //                 }
    //             });
                
    //             // Stop scanner if switching away from scan tab
    //             if (tabName !== 'scan' && scannerActive) {
    //                 toggleScanner();
    //             }
    //         }
            
    //         // Toggle scanner function - FIXED VERSION
    //         async function toggleScanner() {
                
    //             if (!scannerActive) {
    //                 // START SCANNER
    //                 try {
                        
    //                     // Request camera access
    //                     videoStream = await navigator.mediaDevices.getUserMedia({ 
    //                         video: { 
    //                             facingMode: 'environment'
    //                         } 
    //                     });
                        
    //                     // Set video source
    //                     video.srcObject = videoStream;
                        
    //                     // Wait for video to load
    //                     await new Promise((resolve, reject) => {
    //                         let resolved = false;
                            
    //                         video.onloadedmetadata = () => {
    //                             if (!resolved) {
    //                                 resolved = true;
    //                                 resolve();
    //                             }
    //                         };
                            
    //                         video.onerror = (error) => {
    //                             if (!resolved) {
    //                                 resolved = true;
    //                                 reject(new Error('Video failed to load'));
    //                             }
    //                         };
                            
    //                         // Fallback timeout
    //                         setTimeout(() => {
    //                             if (!resolved) {
    //                                 resolved = true;
    //                                 resolve();
    //                             }
    //                         }, 3000);
    //                     });
                        
    //                     // Try to play video
    //                     try {
    //                         await video.play();
    //                     } catch (playError) {
    //                         // Continue anyway
    //                     }
                        
    //                     // Update UI state
    //                     scannerActive = true;
    //                     scannerBtn.innerHTML = '<i class="fas fa-stop"></i> Stop Scanner';
    //                     updateScannerStatus(true);
                        
    //                     // Clear any previous results
    //                     document.getElementById('result').innerHTML = '';
                        
    //                     // Start scanning after a short delay to ensure video is ready
    //                     setTimeout(() => {
    //                         if (scannerActive) {
    //                             startQRScanning();
    //                         }
    //                     }, 500);
                        
    //                     showNotification('Scanner activated! Point camera at QR code', 'success');
                        
    //                 } catch (error) {
    //                     showNotification('Camera error: ' + error.message, 'error');
    //                     scannerActive = false;
    //                     scannerBtn.innerHTML = '<i class="fas fa-camera"></i> Start Scanner';
    //                     updateScannerStatus(false);
    //                 }
    //             } else {
    //                 // STOP SCANNER
                    
    //                 scannerActive = false;
    //                 scannerBtn.innerHTML = '<i class="fas fa-camera"></i> Start Scanner';
    //                 updateScannerStatus(false);
                    
    //                 // Clear scanning interval
    //                 if (scanningInterval) {
    //                     clearInterval(scanningInterval);
    //                     scanningInterval = null;
    //                 }
                    
    //                 // Stop video stream
    //                 if (videoStream) {
    //                     videoStream.getTracks().forEach(track => {
    //                         track.stop();
    //                     });
    //                     video.srcObject = null;
    //                     videoStream = null;
    //                 }
                    
    //             }
                
    //             updateDebugInfo();
    //         }
            
    //         // QR Code scanning - FIXED VERSION
    //         function startQRScanning() {
    //             if (!scannerActive) {
    //                 return;
    //             }
                
    //             // Clear any existing interval
    //             if (scanningInterval) {
    //                 clearInterval(scanningInterval);
    //             }
                
    //             // Create canvas for processing
    //             const canvas = document.createElement('canvas');
    //             const context = canvas.getContext('2d', {
    //                 willReadFrequently: true
    //             });
                
    //             let scanCount = 0;
                
    //             // Start scanning loop
    //             scanningInterval = setInterval(() => {
    //                 if (!scannerActive || !video.videoWidth || !video.videoHeight) {
    //                     return;
    //                 }
                    
    //                 scanCount++;
                    
    //                 // Set canvas dimensions
    //                 canvas.width = video.videoWidth;
    //                 canvas.height = video.videoHeight;
                    
    //                 // Draw video frame to canvas
    //                 context.drawImage(video, 0, 0, canvas.width, canvas.height);
                    
    //                 // Get image data
    //                 const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                    
    //                 try {
    //                     // Try to decode QR code
    //                     const code = jsQR(imageData.data, imageData.width, imageData.height, {
    //                         inversionAttempts: 'dontInvert',
    //                     });
                        
    //                     if (code) {
    //                         handleQRResult(code.data);
    //                     }
    //                 } catch (error) {
    //                     // Silent fail - normal when no QR code found
    //                 }
    //             }, 200); // Scan every 200ms (5 times per second)
                
    //         }
            
    //         // Handle QR result
    //         async function handleQRResult(data) {
    //             const resultDiv = document.getElementById('result');
                
    //             try {
    //                 // Stop scanner first
    //                 if (scannerActive) {
    //                     toggleScanner();
    //                 }
                    
    //                 // Determine QR type
    //                 const qrType = determineQRType(data);
                    
    //                 // Create appropriate actions
    //                 let actions = '';
                    
    //                 if (qrType === 'url') {
    //                     actions = '<button class="btn" onclick="window.open(\\'' + escapeSingleQuotes(data) + '\\', \\'_blank\\')">' +
    //                               '<i class="fas fa-external-link-alt"></i> Open Link' +
    //                               '</button>';
    //                 } else if (qrType === 'email') {
    //                     actions = '<button class="btn" onclick="location.href=\\'' + escapeSingleQuotes(data) + '\\'">' +
    //                               '<i class="fas fa-envelope"></i> Send Email' +
    //                               '</button>';
    //                 } else if (qrType === 'phone') {
    //                     actions = '<button class="btn" onclick="location.href=\\'' + escapeSingleQuotes(data) + '\\'">' +
    //                               '<i class="fas fa-phone"></i> Call Number' +
    //                               '</button>';
    //                 }
                    
    //                 // Display results
    //                 resultDiv.innerHTML = 
    //                     '<div class="result-header">' +
    //                         '<i class="fas fa-check-circle" style="color: #10b981;"></i>' +
    //                         '<h3 style="margin: 0;">QR Code Scanned Successfully!</h3>' +
    //                     '</div>' +
    //                     '<div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border: 1px solid #e5e7eb;">' +
    //                         '<div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">' +
    //                             '<span class="history-type" style="background: ' + getTypeColor(qrType) + '">' + qrType.toUpperCase() + '</span>' +
    //                             '<span style="color: #6b7280; font-size: 0.9rem;">' +
    //                                 new Date().toLocaleTimeString() +
    //                             '</span>' +
    //                         '</div>' +
    //                         '<div style="font-size: 1.1rem; word-break: break-all; padding: 10px; background: #f8fafc; border-radius: 5px;">' +
    //                             escapeHtml(data) +
    //                         '</div>' +
    //                     '</div>' +
    //                     '<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">' +
    //                         actions +
    //                         '<button class="btn" onclick="copyToClipboard(\\'' + escapeSingleQuotes(data) + '\\')">' +
    //                             '<i class="fas fa-copy"></i> Copy' +
    //                         '</button>' +
    //                         '<button class="btn" onclick="toggleScanner()">' +
    //                             '<i class="fas fa-redo"></i> Scan Another' +
    //                         '</button>' +
    //                     '</div>';
                    
    //                 resultDiv.classList.add('show');
                    
    //                 // Save to history
    //                 saveToHistory(data, qrType);
                    
    //                 showNotification('QR code scanned successfully!', 'success');
                    
    //             } catch (error) {
    //                 resultDiv.innerHTML = 
    //                     '<div class="result-header">' +
    //                         '<i class="fas fa-exclamation-triangle" style="color: #ef4444;"></i>' +
    //                         '<h3 style="margin: 0;">Error Processing QR Code</h3>' +
    //                     '</div>' +
    //                     '<div style="background: white; padding: 15px; border-radius: 8px; margin: 15px 0; border: 1px solid #e5e7eb;">' +
    //                         '<p>Error: ' + error.message + '</p>' +
    //                     '</div>';
    //                 resultDiv.classList.add('show');
    //             }
    //         }
            
    //         // Determine QR code type
    //         function determineQRType(data) {
    //             if (data.startsWith('http://') || data.startsWith('https://')) {
    //                 return 'url';
    //             } else if (data.startsWith('mailto:')) {
    //                 return 'email';
    //             } else if (data.startsWith('tel:')) {
    //                 return 'phone';
    //             } else if (data.startsWith('WIFI:')) {
    //                 return 'wifi';
    //             } else if (data.startsWith('BEGIN:VCARD')) {
    //                 return 'contact';
    //             } else if (data.includes('@') && data.includes('.')) {
    //                 return 'email';
    //             }
    //             return 'text';
    //         }
            
    //         // Upload QR from image
    //         function uploadQR() {
    //             document.getElementById('file-input').click();
    //         }
            
    //         function handleFileUpload(e) {
    //             const file = e.target.files[0];
    //             if (!file) return;
                
    //             const reader = new FileReader();
    //             reader.onload = function(event) {
    //                 const img = new Image();
    //                 img.onload = function() {
    //                     const canvas = document.createElement('canvas');
    //                     const context = canvas.getContext('2d', {
    //                         willReadFrequently: true
    //                     });
    //                     canvas.width = img.width;
    //                     canvas.height = img.height;
    //                     context.drawImage(img, 0, 0);
                        
    //                     const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    //                     const code = jsQR(imageData.data, canvas.width, canvas.height, {
    //                         inversionAttempts: 'dontInvert',
    //                     });
                        
    //                     if (code) {
    //                         handleQRResult(code.data);
    //                     } else {
    //                         showNotification('No QR code found in image', 'warning');
    //                     }
    //                 };
    //                 img.src = event.target.result;
    //             };
    //             reader.readAsDataURL(file);
    //         }
            
    //         // Generate QR Code
    //         async function generateQR() {
    //             const text = document.getElementById('qr-text').value.trim();
    //             if (!text) {
    //                 showNotification('Please enter content to generate QR code', 'warning');
    //                 return;
    //             }
                
    //             try {
    //                 const qrCodeDataURL = await new Promise((resolve, reject) => {
    //                     QRCode.toDataURL(text, {
    //                         width: 300,
    //                         height: 300,
    //                         color: {
    //                             dark: '#6d28d9',
    //                             light: '#FFFFFF'
    //                         },
    //                         margin: 2
    //                     }, (err, url) => {
    //                         if (err) reject(err);
    //                         else resolve(url);
    //                     });
    //                 });
                    
    //                 const container = document.getElementById('qr-image-container');
    //                 container.innerHTML = 
    //                     '<div class="qr-preview">' +
    //                         '<img src="' + qrCodeDataURL + '" alt="Generated QR Code" style="width: 100%; border-radius: 8px;">' +
    //                         '<p style="margin-top: 10px; color: #6b7280; font-size: 0.9rem;">' +
    //                             'Scan this QR code to access: <br>' +
    //                             '<strong>' + escapeHtml(text.length > 50 ? text.substring(0, 50) + '...' : text) + '</strong>' +
    //                         '</p>' +
    //                     '</div>';
                    
    //                 document.getElementById('qr-result').classList.add('show');
    //                 document.getElementById('download-btn').style.display = 'inline-block';
    //                 document.getElementById('share-btn').style.display = 'inline-block';
    //                 currentQRCode = { image: qrCodeDataURL, text: text };
                    
    //                 showNotification('QR code generated successfully!', 'success');
                    
    //             } catch (error) {
    //                 showNotification('Error generating QR code: ' + error.message, 'error');
    //             }
    //         }
            
    //         // Download QR Code
    //         function downloadQR() {
    //             if (!currentQRCode) return;
    //             const link = document.createElement('a');
    //             link.href = currentQRCode.image;
    //             link.download = 'qrossroads-qr-' + Date.now() + '.png';
    //             document.body.appendChild(link);
    //             link.click();
    //             document.body.removeChild(link);
    //             showNotification('QR code downloaded!', 'success');
    //         }
            
    //         // Share QR Code
    //         async function shareQR() {
    //             if (!currentQRCode) return;
                
    //             try {
    //                 const qrText = document.getElementById('qr-text').value.trim();
                    
    //                 if (navigator.share) {
    //                     const response = await fetch(currentQRCode.image);
    //                     const blob = await response.blob();
    //                     const file = new File([blob], 'qrossroads-qr.png', { type: 'image/png' });
                        
    //                     await navigator.share({
    //                         title: 'QR Code from Qrossroads',
    //                         text: qrText || 'QR Code generated with Qrossroads',
    //                         files: [file]
    //                     });
    //                     showNotification('QR code shared successfully!', 'success');
    //                 } else {
    //                     downloadQR();
    //                 }
    //             } catch (error) {
    //                 downloadQR();
    //             }
    //         }
            
    //         // History functions
    //         function loadHistory() {
    //             try {
    //                 const history = JSON.parse(localStorage.getItem('qrossroads_history') || '[]');
    //                 const historyList = document.getElementById('history-list');
                    
    //                 if (history.length === 0) {
    //                     historyList.innerHTML = 
    //                         '<div style="text-align: center; padding: 40px; color: #6b7280;">' +
    //                             '<i class="fas fa-road fa-3x" style="margin-bottom: 20px; opacity: 0.5;"></i>' +
    //                             '<h4>No Digital Paths Yet</h4>' +
    //                             '<p>Start scanning QR codes to build your digital path history.</p>' +
    //                         '</div>';
    //                     return;
    //                 }
                    
    //                 let historyHTML = '';
    //                 history.forEach(item => {
    //                     historyHTML += 
    //                         '<div class="history-item">' +
    //                             '<div style="flex: 1;">' +
    //                                 '<div>' +
    //                                     '<span class="history-type" style="background: ' + getTypeColor(item.type) + '">' + item.type.toUpperCase() + '</span>' +
    //                                     '<strong>' + escapeHtml(item.data.length > 60 ? item.data.substring(0, 60) + '...' : item.data) + '</strong>' +
    //                                 '</div>' +
    //                                 '<div class="history-time">' +
    //                                     '<i class="far fa-clock"></i>' +
    //                                     new Date(item.timestamp).toLocaleString() +
    //                                 '</div>' +
    //                             '</div>' +
    //                             '<div style="display: flex; gap: 8px;">' +
    //                                 '<button class="btn" style="padding: 8px 16px; font-size: 0.9rem;" onclick="copyToClipboard(\\'' + escapeSingleQuotes(item.data) + '\\')">' +
    //                                     '<i class="fas fa-copy"></i>' +
    //                                 '</button>' +
    //                             '</div>' +
    //                         '</div>';
    //                 });
                    
    //                 historyList.innerHTML = historyHTML;
    //             } catch (error) {
    //                 // Silent error
    //             }
    //         }
            
    //         async function clearHistory() {
    //             if (!confirm('Clear all your digital paths? This action cannot be undone.')) return;
                
    //             try {
    //                 localStorage.removeItem('qrossroads_history');
    //                 loadHistory();
    //                 showNotification('All digital paths cleared!', 'success');
    //             } catch (error) {
    //                 showNotification('Error clearing history: ' + error.message, 'error');
    //             }
    //         }
            
    //         async function exportHistory() {
    //             try {
    //                 const history = JSON.parse(localStorage.getItem('qrossroads_history') || '[]');
                    
    //                 if (history.length === 0) {
    //                     showNotification('No history to export', 'warning');
    //                     return;
    //                 }
                    
    //                 const csv = history.map(item => 
    //                     '"' + item.timestamp + '","' + item.type + '","' + item.data.replace(/"/g, '""') + '"'
    //                 ).join('\\n');
                    
    //                 const blob = new Blob(['timestamp,type,data\\n' + csv], { type: 'text/csv' });
    //                 const url = window.URL.createObjectURL(blob);
    //                 const a = document.createElement('a');
    //                 a.href = url;
    //                 a.download = 'qrossroads-digital-paths-' + new Date().toISOString().split('T')[0] + '.csv';
    //                 document.body.appendChild(a);
    //                 a.click();
    //                 document.body.removeChild(a);
    //                 window.URL.revokeObjectURL(url);
                    
    //                 showNotification('Digital paths exported as CSV!', 'success');
    //             } catch (error) {
    //                 showNotification('Export failed: ' + error.message, 'error');
    //             }
    //         }
            
    //         // Save to history
    //         function saveToHistory(data, type) {
    //             try {
    //                 const history = JSON.parse(localStorage.getItem('qrossroads_history') || '[]');
    //                 history.unshift({
    //                     id: Date.now(),
    //                     data: data,
    //                     type: type,
    //                     timestamp: new Date().toISOString()
    //                 });
                    
    //                 if (history.length > 50) history.length = 50;
    //                 localStorage.setItem('qrossroads_history', JSON.stringify(history));
    //                 loadHistory();
    //             } catch (error) {
    //                 // Silent error
    //             }
    //         }
            
    //         // Utility functions
    //         function copyToClipboard(text) {
    //             navigator.clipboard.writeText(text).then(() => {
    //                 showNotification('Copied to clipboard!', 'success');
    //             });
    //         }
            
    //         function showNotification(message, type = 'info') {
    //             const notification = document.createElement('div');
    //             notification.style.cssText = 
    //                 'position: fixed; top: 20px; right: 20px; background: ' + 
    //                 (type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : type === 'warning' ? '#f59e0b' : '#6d28d9') + 
    //                 '; color: white; padding: 15px 25px; border-radius: 12px; ' +
    //                 'box-shadow: 0 10px 25px rgba(0,0,0,0.2); z-index: 10000; ' +
    //                 'animation: fadeInUp 0.3s ease; font-family: inherit;';
                
    //             notification.innerHTML = 
    //                 '<div style="display: flex; align-items: center; gap: 10px;">' +
    //                     '<i class="fas ' + 
    //                     (type === 'success' ? 'fa-check-circle' : 
    //                      type === 'error' ? 'fa-exclamation-circle' : 
    //                      type === 'warning' ? 'fa-exclamation-triangle' : 'fa-info-circle') + 
    //                     '"></i>' +
    //                     '<span>' + message + '</span>' +
    //                 '</div>';
                
    //             document.body.appendChild(notification);
                
    //             setTimeout(() => {
    //                 notification.style.animation = 'fadeOut 0.3s ease';
    //                 setTimeout(() => {
    //                     if (notification.parentNode) {
    //                         notification.parentNode.removeChild(notification);
    //                     }
    //                 }, 300);
    //             }, 3000);
    //         }
            
    //         function escapeHtml(text) {
    //             const div = document.createElement('div');
    //             div.textContent = text;
    //             return div.innerHTML;
    //         }
            
    //         function escapeSingleQuotes(text) {
    //             return text.replace(/'/g, "\\\\'");
    //         }
            
    //         function getTypeColor(type) {
    //             const colors = {
    //                 'url': '#3b82f6',
    //                 'email': '#8b5cf6',
    //                 'phone': '#10b981',
    //                 'wifi': '#f59e0b',
    //                 'text': '#6b7280',
    //                 'contact': '#ec4899'
    //             };
    //             return colors[type] || '#6d28d9';
    //         }
            
    //         // Make functions available globally
    //         window.toggleScanner = toggleScanner;
    //         window.uploadQR = uploadQR;
    //         window.generateQR = generateQR;
    //         window.downloadQR = downloadQR;
    //         window.shareQR = shareQR;
    //         window.clearHistory = clearHistory;
    //         window.exportHistory = exportHistory;
    //         window.switchTab = switchTab;
    //         window.copyToClipboard = copyToClipboard;
            
    //         // Add animation styles
    //         const style = document.createElement('style');
    //         style.textContent = 
    //             '@keyframes fadeOut { ' +
    //             '  from { opacity: 1; transform: translateY(0); } ' +
    //             '  to { opacity: 0; transform: translateY(-10px); } ' +
    //             '} ' +
    //             '@keyframes fadeInUp { ' +
    //             '  from { opacity: 0; transform: translateY(20px); } ' +
    //             '  to { opacity: 1; transform: translateY(0); } ' +
    //             '}';
    //         document.head.appendChild(style);
            
    //         // Add event listener for video errors
    //         video.addEventListener('error', (e) => {
    //             updateDebugInfo();
    //         });
            
    //         // Add event listener for video playing
    //         video.addEventListener('playing', () => {
    //             updateDebugInfo();
    //         });
            
    //     });
    // </script>





const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// All routes serve the index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
