// server.js - Qrossroads: Where Digital Paths Meet (GREEN ACCENT VERSION)


// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
    console.log('🗂️ Created public directory');
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(publicDir));

<!DOCTYPE html>
<head>
    <title>Qrossroads | Where Digital Paths Meet</title>
    
    <!-- Font Awesome -->
    
    <style>
        /* Qrossroads Theme Colors - Enhanced with Green */
        :root {
            --primary: #6d28d9;
            --primary-dark: #5b21b6;
            --secondary: #10b981;
            --accent: #f59e0b;
            --dark: #1f2937;
            --light: #f9fafb;
            --gray: #6b7280;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background: linear-gradient(135deg, var(--primary) 0%, #8b5cf6 100%);
            min-height: 100vh;
            color: var(--dark);
            line-height: 1.5;
            position: relative;
            overflow-x: hidden;
        }

        /* Green accent overlay from right */
        body::before {
            content: '';
            position: fixed;
            top: 0;
            right: 0;
            width: 40%;
            height: 100%;
            background: linear-gradient(90deg, 
                transparent 0%, 
                rgba(16, 185, 129, 0.08) 20%,
                rgba(16, 185, 129, 0.15) 50%,
                rgba(16, 185, 129, 0.08) 80%,
                transparent 100%);
            z-index: -1;
            pointer-events: none;
        }

        /* Subtle green particles animation */
        body::after {
            content: '';
            position: fixed;
            top: 0;
            right: 0;
            width: 40%;
            height: 100%;
            background-image: 
                radial-gradient(circle at 90% 20%, rgba(16, 185, 129, 0.1) 2px, transparent 3px),
                radial-gradient(circle at 95% 40%, rgba(16, 185, 129, 0.08) 1px, transparent 2px),
                radial-gradient(circle at 85% 60%, rgba(16, 185, 129, 0.12) 3px, transparent 4px),
                radial-gradient(circle at 92% 80%, rgba(16, 185, 129, 0.06) 2px, transparent 3px);
            background-size: 100px 100px;
            z-index: -1;
            pointer-events: none;
            animation: floatParticles 20s linear infinite;
        }

        @keyframes floatParticles {
            0% { transform: translateY(0); }
            100% { transform: translateY(-100px); }
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
        }

        .logo-container {
            text-align: center;
            padding: 30px 20px;
            margin-bottom: 10px;
            position: relative;
        }

        /* Green accent behind logo */
        .logo-container::before {
            content: '';
            position: absolute;
            top: 50%;
            right: 10%;
            transform: translateY(-50%);
            width: 120px;
            height: 120px;
            background: linear-gradient(135deg, 
                rgba(16, 185, 129, 0.2) 0%, 
                rgba(16, 185, 129, 0.1) 50%, 
                transparent 100%);
            border-radius: 30px;
            z-index: 0;
            filter: blur(20px);
        }

        .logo-symbol {
            width: 80px;
            height: 80px;
            background: white;
            border-radius: 20px;
            margin: 0 auto 20px;
            position: relative;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            transform: rotate(45deg);
            transition: transform 0.3s ease;
            z-index: 1;
        }

        .logo-symbol:hover {
            transform: rotate(45deg) scale(1.05);
            box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        .logo-symbol::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0deg);
            width: 40px;
            height: 40px;
            border: 4px solid var(--primary);
            border-radius: 8px;
        }

        .logo-symbol::after {
            content: '+';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(-45deg);
            font-size: 28px;
            font-weight: 900;
            color: var(--primary);
        }

        /* Green accent dot on logo */
        .logo-symbol .green-dot {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 12px;
            height: 12px;
            background: var(--secondary);
            border-radius: 50%;
            animation: pulseGreen 2s ease-in-out infinite;
        }

        @keyframes pulseGreen {
            0%, 100% { 
                transform: scale(1);
                opacity: 0.8;
                box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
            }
            50% { 
                transform: scale(1.2);
                opacity: 1;
                box-shadow: 0 0 0 8px rgba(16, 185, 129, 0);
            }
        }

        .logo-text {
            text-align: center;
            position: relative;
            z-index: 1;
        }

        .logo-name {
            font-size: 3.5rem;
            font-weight: 800;
            color: white;
            margin-bottom: 8px;
            letter-spacing: -0.5px;
            text-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }

        .logo-tagline {
            font-size: 1.1rem;
            font-weight: 400;
            color: rgba(255,255,255,0.9);
            letter-spacing: 1px;
            position: relative;
            display: inline-block;
            padding-bottom: 10px;
        }

        /* Green underline for tagline */
        .logo-tagline::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, 
                transparent 0%, 
                var(--secondary) 50%, 
                transparent 100%);
            border-radius: 2px;
        }

        .logo-subtitle {
            font-size: 1rem;
            color: rgba(255,255,255,0.8);
            margin-top: 15px;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
            line-height: 1.4;
            position: relative;
            padding: 15px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            border-left: 3px solid var(--secondary);
        }

        .app-card {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
            margin-bottom: 30px;
            position: relative;
        }

        /* Green accent corner on card */
        .app-card::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, 
                rgba(16, 185, 129, 0.15) 0%, 
                transparent 50%);
            border-radius: 0 20px 0 0;
            z-index: 0;
        }

        .tabs {
            display: flex;
            background: var(--light);
            border-bottom: 1px solid #e5e7eb;
            position: relative;
            z-index: 1;
        }

        .tab {
            flex: 1;
            padding: 20px;
            text-align: center;
            cursor: pointer;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s;
            border-bottom: 3px solid transparent;
            color: var(--gray);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            position: relative;
        }

        .tab:hover {
            background: rgba(109, 40, 217, 0.05);
            color: var(--primary);
        }

        .tab.active {
            background: white;
            border-bottom: 3px solid var(--primary);
            color: var(--primary);
        }

        /* Green indicator for active tab */
        .tab.active::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 15px;
            transform: translateY(-50%);
            width: 6px;
            height: 6px;
            background: var(--secondary);
            border-radius: 50%;
            animation: blink 1.5s ease-in-out infinite;
        }

        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }

        .tab-content {
            display: none;
            padding: 30px;
        }

        .tab-content.active {
            display: block;
            animation: fadeIn 0.3s ease;
        }

        .scanner-container {
            text-align: center;
        }

        #video-container {
            width: 100%;
            max-width: 500px;
            height: 300px;
            margin: 0 auto 20px;
            background: #000;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            border: 2px solid rgba(255,255,255,0.1);
            box-shadow: 
                0 15px 35px rgba(0,0,0,0.3),
                inset 0 0 0 1px rgba(255,255,255,0.05);
        }

        #video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .scanner-frame {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 200px;
            height: 200px;
            border: 3px solid var(--secondary);
            border-radius: 10px;
            box-shadow: 
                0 0 0 5000px rgba(0, 0, 0, 0.6),
                0 0 20px rgba(16, 185, 129, 0.4);
            pointer-events: none;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { 
                border-color: var(--secondary);
                box-shadow: 
                    0 0 0 5000px rgba(0, 0, 0, 0.6),
                    0 0 20px rgba(16, 185, 129, 0.4);
            }
            50% { 
                border-color: #34d399;
                box-shadow: 
                    0 0 0 5000px rgba(0, 0, 0, 0.6),
                    0 0 30px rgba(52, 211, 153, 0.6);
            }
        }

        .btn-group {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            margin: 25px 0;
        }

        .btn {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: white;
            border: none;
            padding: 15px 30px;
            border-radius: 50px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s;
            box-shadow: 0 4px 12px rgba(109, 40, 217, 0.3);
            position: relative;
            overflow: hidden;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(109, 40, 217, 0.4);
            background: linear-gradient(135deg, var(--primary-dark) 0%, #4c1d95 100%);
        }

        /* Green accent on button hover */
        .btn:hover::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 30px;
            height: 100%;
            background: linear-gradient(90deg, 
                transparent 0%, 
                rgba(16, 185, 129, 0.2) 100%);
        }

        .btn-secondary {
            background: linear-gradient(135deg, var(--dark) 0%, #374151 100%);
            box-shadow: 0 4px 12px rgba(31, 41, 55, 0.3);
        }

        .btn-secondary:hover {
            background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
            box-shadow: 0 8px 20px rgba(31, 41, 55, 0.4);
        }

        .btn-secondary:hover::after {
            background: linear-gradient(90deg, 
                transparent 0%, 
                rgba(16, 185, 129, 0.15) 100%);
        }

        .result-box {
            background: var(--light);
            border-radius: 10px;
            padding: 20px;
            margin-top: 20px;
            display: none;
            border: 1px solid #e5e7eb;
            position: relative;
            overflow: hidden;
        }

        /* Green accent stripe on result box */
        .result-box::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(to bottom, 
                var(--secondary) 0%, 
                #34d399 100%);
        }

        .result-box.show {
            display: block;
            animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
            from { 
                opacity: 0; 
                transform: translateY(10px) translateX(10px); 
            }
            to { 
                opacity: 1; 
                transform: translateY(0) translateX(0); 
            }
        }
        
        .result-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
            color: var(--primary);
        }

        .history-item {
            padding: 15px;
            border-bottom: 1px solid #e9ecef;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.2s;
            position: relative;
        }
        
        .history-item:hover {
            background: rgba(109, 40, 217, 0.03);
            padding-left: 20px;
        }

        /* Green indicator for history items */
        .history-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 3px;
            height: 0;
            background: var(--secondary);
            border-radius: 0 2px 2px 0;
            transition: height 0.3s ease;
        }

        .history-item:hover::before {
            height: 60%;
        }

        .history-item:last-child {
            border-bottom: none;
        }
        
        .history-type {
            display: inline-block;
            padding: 4px 12px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: white;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-right: 10px;
        }
        
        .history-time {
            color: var(--gray);
            font-size: 0.9rem;
            margin-top: 5px;
            display: flex;
            align-items: center;
            gap: 5px;
        }

        .qr-preview {
            max-width: 200px;
            margin: 20px auto;
            padding: 15px;
            background: white;
            border-radius: 12px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.1);
            position: relative;
            border: 1px solid #e5e7eb;
        }

        /* Green corner on QR preview */
        .qr-preview::after {
            content: '';
            position: absolute;
            top: -1px;
            right: -1px;
            width: 15px;
            height: 15px;
            background: linear-gradient(135deg, 
                var(--secondary) 0%, 
                transparent 50%);
            border-radius: 0 12px 0 0;
        }
        
        textarea {
            width: 100%;
            height: 100px;
            padding: 15px;
            border: 2px solid #e9ecef;
            border-radius: 10px;
            font-size: 1rem;
            margin-bottom: 20px;
            resize: vertical;
            font-family: inherit;
            transition: all 0.3s;
        }
        
        textarea:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 3px rgba(109, 40, 217, 0.1);
        }

        /* Green accent on textarea focus */
        textarea:focus {
            border-right-color: var(--secondary);
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
            .container {
                padding: 15px;
            }
            
            /* Hide green overlay on mobile for cleaner look */
            body::before,
            body::after {
                opacity: 0.5;
            }
            
            .logo-container {
                padding: 20px 15px;
            }
            
            .logo-container::before {
                display: none;
            }
            
            .logo-symbol {
                width: 60px;
                height: 60px;
                margin-bottom: 15px;
            }
            
            .logo-symbol::before {
                width: 30px;
                height: 30px;
                border-width: 3px;
            }
            
            .logo-symbol::after {
                font-size: 20px;
            }
            
            .logo-symbol .green-dot {
                width: 8px;
                height: 8px;
            }
            
            .logo-name {
                font-size: 2.5rem;
            }
            
            .logo-tagline {
                font-size: 1rem;
                letter-spacing: 0.5px;
            }
            
            .logo-subtitle {
                font-size: 0.9rem;
                padding: 10px;
                border-left-width: 2px;
            }
            
            .tab-content {
                padding: 20px;
            }
            
            .tabs {
                flex-direction: column;
            }
            
            .tab {
                padding: 15px;
            }
            
            .tab.active::after {
                right: 10px;
            }
            
            #video-container {
                height: 250px;
            }
            
            .scanner-frame {
                width: 180px;
                height: 180px;
            }
            
            .btn {
                padding: 12px 24px;
                width: 100%;
                justify-content: center;
            }
            
            .btn-group {
                flex-direction: column;
                align-items: stretch;
            }
        }

        .footer {
            text-align: center;
            color: rgba(255,255,255,0.8);
            padding: 30px 0;
            position: relative;
        }
        
        /* Green accent in footer */
        .footer::before {
            content: '';
            position: absolute;
            top: 0;
            right: 10%;
            width: 60px;
            height: 2px;
            background: linear-gradient(90deg, 
                transparent 0%, 
                var(--secondary) 50%, 
                transparent 100%);
        }
        
        .copyright {
            margin-top: 10px;
            opacity: 0.7;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
            </div>
            </div>
        </div>

                </div>
                </div>
                </div>
            </div>

                    </div>
                        </button>
                        </button>
                    </div>
                    
                </div>
            </div>

                        </button>
                    </div>
                            </button>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

                </div>
                    </button>
                    </button>
                </div>
            </div>
        </div>

            <p><strong>Qrossroads</strong> - Professional QR Code Hub</p>
        </div>
    </div>

    <!-- Include QR Code scanning library -->
    <!-- Include QR Code generation library -->
    <script>
        // Qrossroads - Where Digital Paths Meet
        document.addEventListener('DOMContentLoaded', function() {
            console.log('⚡ Qrossroads activated successfully!');
            
            // Initialize variables
            
            // Tab switching
                tab.addEventListener('click', function() {
                    switchTab(tabName);
                });
            });
            
            // Button event listeners
            document.getElementById('scanner-btn').addEventListener('click', toggleScanner);
            document.getElementById('upload-btn').addEventListener('click', uploadQR);
            document.getElementById('generate-btn').addEventListener('click', generateQR);
            document.getElementById('download-btn').addEventListener('click', downloadQR);
            document.getElementById('share-btn').addEventListener('click', shareQR);
            document.getElementById('clear-history-btn').addEventListener('click', clearHistory);
            document.getElementById('export-btn').addEventListener('click', exportHistory);
            document.getElementById('file-input').addEventListener('change', handleFileUpload);
            
            // Initialize
            loadHistory();
            
            // Tab switching function
            function switchTab(tabName) {
                // Update tabs
                        tab.classList.add('active');
                    } else {
                        tab.classList.remove('active');
                    }
                });
                
                // Update tab contents
                        content.classList.add('active');
                    } else {
                        content.classList.remove('active');
                    }
                });
                
                // Stop scanner if switching away from scan tab
                    toggleScanner();
                }
            }
            
            // Toggle scanner function
            async function toggleScanner() {
                
                if (!scannerActive) {
                    try {
                            video: { facingMode: 'environment' } 
                        });
                        scannerBtn.classList.add('accent');
                        scanQRCode();
                    } catch (error) {
                        showNotification('Camera access error: ' + error.message, 'error');
                        scannerBtn.classList.remove('accent');
                    }
                } else {
                    if (videoStream) {
                    }
                    scannerBtn.classList.remove('accent');
                }
            }
            
            // QR Code scanning
            function scanQRCode() {
                
                function tick() {
                    if (!scannerActive) return;
                    
                        context.drawImage(video, 0, 0, canvas.width, canvas.height);
                        
                        
                        if (code) {
                            handleQRResult(code.data);
                        }
                    }
                    requestAnimationFrame(tick);
                }
                tick();
            }
            
            // Handle QR result
            async function handleQRResult(data) {
                
                try {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ qrData: data })
                    });
                    
                    
                    if (result.success) {
                        
                        // Determine actions based on QR type
                              </button>\`;
                              </button>\`;
                              </button>\`;
                              </button>\`;
                        }
                        
                            </div>
                                        \${new Date().toLocaleTimeString()}
                                    </span>
                                </div>
                                    \${escapeHtml(qrData)}
                                </div>
                            </div>
                                \${actions}
                                </button>
                                </button>
                            </div>
                        \`;
                        resultDiv.classList.add('show');
                        
                        if (scannerActive) {
                            toggleScanner();
                        }
                        
                        loadHistory();
                        showNotification('Digital path scanned successfully!', 'success');
                    }
                } catch (error) {
                        </div>
                            Failed to process QR code: \${error.message}
                        </div>
                    \`;
                    resultDiv.classList.add('show');
                    showNotification('Scan failed: ' + error.message, 'error');
                }
            }
            
            // Upload QR from image
            function uploadQR() {
                document.getElementById('file-input').click();
            }
            
            function handleFileUpload(e) {
                if (!file) return;
                
                        context.drawImage(img, 0, 0);
                        
                        
                        if (code) {
                            handleQRResult(code.data);
                        } else {
                            showNotification('No QR code found in the image.', 'warning');
                        }
                    };
                };
                reader.readAsDataURL(file);
            }
            
            // Generate QR Code
            async function generateQR() {
                if (!text) {
                    showNotification('Please enter content to generate QR code', 'warning');
                    return;
                }
                
                try {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ text: text, size: 300 })
                    });
                    
                    
                    if (result.success) {
                                    Scan this QR code to access: <br>
                                    <strong>\${escapeHtml(text.length > 50 ? text.substring(0, 50) + '...' : text)}</strong>
                                </p>
                            </div>
                        \`;
                        document.getElementById('qr-result').classList.add('show');
                        showNotification('QR code generated successfully!', 'success');
                    }
                } catch (error) {
                    showNotification('Error generating QR code: ' + error.message, 'error');
                }
            }
            
            // Download QR Code
            function downloadQR() {
                if (!currentQRCode) return;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                showNotification('QR code downloaded!', 'success');
            }
            
            // Share QR Code - COMPLETE WORKING VERSION
            async function shareQR() {
                if (!currentQRCode) return;
                
                try {
                    // Get the QR code image and text
                    
                    if (!qrImage) {
                        showNotification('QR code not found', 'error');
                        return;
                    }
                    
                    // Create share text
                    if (qrText) {
                    }
                    
                    // Check if Web Share API is available
                    if (navigator.share && navigator.canShare) {
                        try {
                            // Convert data URL to blob for sharing
                            
                            // Create a file from blob
                            
                            // Check if file can be shared
                                title: 'QR Code from Qrossroads',
                                text: shareText,
                                files: [file]
                            };
                            
                            if (navigator.canShare && navigator.canShare(shareData)) {
                                await navigator.share(shareData);
                                showNotification('QR code shared successfully!', 'success');
                                return;
                            }
                        } catch (shareError) {
                            console.log('File sharing failed, trying URL sharing:', shareError);
                        }
                        
                        // Fallback to URL sharing if file sharing fails
                        try {
                            await navigator.share({
                                title: 'QR Code from Qrossroads',
                                text: shareText + '\\n\\nGenerated with Qrossroads - Where Digital Paths Meet',
                                url: window.location.href
                            });
                            showNotification('App link shared!', 'success');
                            return;
                        } catch (urlShareError) {
                            console.log('URL sharing failed:', urlShareError);
                        }
                    }
                    
                    // Fallback for browsers without Web Share API or when sharing fails
                    showShareOptions(qrImage.src, qrText);
                    
                } catch (error) {
                    console.error('Share error:', error);
                    showNotification('Sharing failed. Download the QR code instead.', 'error');
                    downloadQR(); // Fallback to download
                }
            }
            
            // Show custom share options modal
            function showShareOptions(qrImageSrc, qrText) {
                // Create share modal
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                    animation: fadeIn 0.3s ease;
                \`;
                
                        background: white;
                        border-radius: 20px;
                        padding: 30px;
                        max-width: 500px;
                        width: 90%;
                        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                        text-align: center;
                    ">
                        </div>
                        
                            background: #f9fafb;
                            border-radius: 12px;
                            padding: 15px;
                            margin: 20px 0;
                            border: 1px solid #e5e7eb;
                        ">
                                \${qrText ? 'Scan to access: <strong>' + qrText.substring(0, 60) + (qrText.length > 60 ? '...' : '') + '</strong>' : 'Generated QR Code'}
                            </p>
                        </div>
                        
                                <span>Download</span>
                            </button>
                                <span>Copy Image</span>
                            </button>
                                <span>Copy Link</span>
                            </button>
                                <span>Copy Text</span>
                            </button>
                        </div>
                        
                                flex: 1;
                                padding: 12px;
                                background: #f1f5f9;
                                color: #64748b;
                                border: none;
                                border-radius: 10px;
                                font-weight: 600;
                                cursor: pointer;
                            ">Cancel</button>
                        </div>
                    </div>
                \`;
                
                // Add styles for share buttons
                    .share-option-btn {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 8px;
                        padding: 15px;
                        background: white;
                        border: 2px solid #e5e7eb;
                        border-radius: 12px;
                        color: #6d28d9;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s;
                    }
                    .share-option-btn:hover {
                        background: #f8fafc;
                        border-color: #6d28d9;
                        transform: translateY(-2px);
                    }
                    .share-option-btn i {
                        font-size: 24px;
                        margin-bottom: 5px;
                    }
                \`;
                document.head.appendChild(style);
                
                document.body.appendChild(shareModal);
                
                // Handle share options
                    btn.addEventListener('click', async function() {
                        
                        switch(action) {
                            case 'download':
                                downloadQR();
                                showNotification('QR code downloaded!', 'success');
                                break;
                                
                            case 'copy-image':
                                try {
                                    // Convert data URL to blob
                                    
                                    // Copy image to clipboard
                                    await navigator.clipboard.write([item]);
                                    showNotification('QR code image copied to clipboard!', 'success');
                                } catch (error) {
                                    console.error('Copy image error:', error);
                                    showNotification('Could not copy image. Download instead.', 'error');
                                    downloadQR();
                                }
                                break;
                                
                            case 'copy-link':
                                if (qrText && (qrText.startsWith('http://') || qrText.startsWith('https://'))) {
                                    await navigator.clipboard.writeText(qrText);
                                    showNotification('Link copied to clipboard!', 'success');
                                } else {
                                    await navigator.clipboard.writeText(qrText || 'QR Code generated with Qrossroads');
                                    showNotification('Text copied to clipboard!', 'success');
                                }
                                break;
                                
                            case 'copy-text':
                                await navigator.clipboard.writeText(qrText || 'QR Code generated with Qrossroads');
                                showNotification('Text copied to clipboard!', 'success');
                                break;
                        }
                        
                        // Close modal after action
                        document.body.removeChild(shareModal);
                        document.head.removeChild(style);
                    });
                });
                
                // Close modal on cancel
                shareModal.querySelector('#cancel-share').addEventListener('click', function() {
                    document.body.removeChild(shareModal);
                    document.head.removeChild(style);
                });
                
                // Close modal on background click
                shareModal.addEventListener('click', function(e) {
                        document.body.removeChild(shareModal);
                        document.head.removeChild(style);
                    }
                });
            }
            
            // Add CSS for animations if not already present
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            \`;
            if (!document.querySelector('style[data-share-animations]')) {
                animationStyle.setAttribute('data-share-animations', 'true');
                document.head.appendChild(animationStyle);
            }
            
            // History functions
            async function loadHistory() {
                try {
                    
                    
                                <h4>No Digital Paths Yet</h4>
                                <p>Start scanning QR codes to build your digital path history.</p>
                            </div>
                        \`;
                        return;
                    }
                    
                                <div>
                                    <strong>\${escapeHtml(item.data.length > 60 ? item.data.substring(0, 60) + '...' : item.data)}</strong>
                                </div>
                                    \${new Date(item.timestamp).toLocaleString()}
                                </div>
                            </div>
                                </button>
                            </div>
                        </div>
                    \`).join('');
                } catch (error) {
                    console.error('Error loading history:', error);
                }
            }
            
            async function clearHistory() {
                if (!confirm('Clear all your digital paths? This action cannot be undone.')) return;
                
                try {
                    
                    if (result.success) {
                        loadHistory();
                        showNotification('All digital paths cleared!', 'success');
                    }
                } catch (error) {
                    showNotification('Error clearing history: ' + error.message, 'error');
                }
            }
            
            async function exportHistory() {
                try {
                    
                    if (result.success) {
                            \`"\${item.timestamp}","\${item.type}","\${item.data.replace(/"/g, '""')}"\`
                        ).join('\\n');
                        
                        document.body.appendChild(a);
                        a.click();
                        document.body.removeChild(a);
                        window.URL.revokeObjectURL(url);
                        
                        showNotification('Digital paths exported as CSV!', 'success');
                    }
                } catch (error) {
                    showNotification('Export failed: ' + error.message, 'error');
                }
            }
            
            // Utility functions
            function copyToClipboard(text) {
                    showNotification('Copied to clipboard!', 'success');
                });
            }
            
                // Create notification element
                            <span>\${message}</span>
                        </div>
                    </div>
                \`;
                document.body.appendChild(notification);
                
                // Remove after 3 seconds
                }, 3000);
            }
            
            function escapeHtml(text) {
                return div.innerHTML;
            }
            
            function escapeSingleQuotes(text) {
                return text.replace(/'/g, "\\\\'");
            }
            
            function getTypeColor(type) {
                    'url': '#3b82f6',
                    'email': '#8b5cf6',
                    'phone': '#10b981',
                    'wifi': '#f59e0b',
                    'text': '#6b7280',
                    'contact': '#ec4899',
                    'sms': '#06b6d4'
                };
                return colors[type] || '#6d28d9';
            }
            
            function connectToWifi(wifiString) {
                showNotification('WiFi connection feature would connect to: ' + wifiString, 'info');
            }
            
            function saveToFavorites(data, type) {
                showNotification('Added to favorites!', 'success');
            }
            
            function rescanItem(data) {
                handleQRResult(data);
                switchTab('scan');
            }
            
            // Make functions available globally
            
            // Add fadeOut animation
                @keyframes fadeOut {
                    from { opacity: 1; transform: translateY(0); }
                    to { opacity: 0; transform: translateY(-10px); }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            \`;
            document.head.appendChild(style);
        });
    </script>
</body>
</html>
`;

// Save HTML to public folder
fs.writeFileSync(path.join(publicDir, 'index.html'), htmlContent);
console.log('🎨 Qrossroads Green Accent interface created in public/index.html');

// API Routes

// QR Code scanning endpoint
    try {
        
        if (!qrData) {
            return res.status(400).json({ 
                success: false, 
                error: 'No QR data provided' 
            });
        }
        
        // Determine type of QR code
        
        if (qrData.startsWith('http://') || qrData.startsWith('https://')) {
        } else if (qrData.startsWith('mailto:')) {
        } else if (qrData.startsWith('tel:')) {
        } else if (qrData.startsWith('WIFI:')) {
        } else if (qrData.startsWith('BEGIN:VCARD')) {
        } else if (qrData.startsWith('SMSTO:') || qrData.startsWith('SMS:')) {
        }
        
        // Add to history
            id: Date.now() + Math.random().toString(36).substr(2, 9),
            data: qrData,
            type: type,
            action: action,
            timestamp: new Date().toISOString()
        };
        
        scanHistory.unshift(historyItem);
        
        res.json({ 
            success: true, 
            result: historyItem,
            message: 'Digital path recorded successfully'
        });
        
    } catch (error) {
        console.error('Scan error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to process digital path' 
        });
    }
});

// QR Code generation endpoint
    try {
        
            return res.status(400).json({ 
                success: false, 
                error: 'Content is required to generate QR code' 
            });
        }
        
        // Generate QR code with Qrossroads styling
            width: size,
            margin: 4,
            color: {
                dark: '#6d28d9', // Qrossroads purple
                light: '#FFFFFF'
            }
        });
        
        res.json({ 
            success: true, 
            qrCode: qrCode,
            text: text,
            message: 'QR code generated successfully'
        });
        
    } catch (error) {
        console.error('Generate error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to generate digital pathway' 
        });
    }
});

// History endpoints
    res.json({ 
        success: true, 
        history: scanHistory,
        count: scanHistory.length,
        message: 'Your digital paths retrieved'
    });
});

    res.json({ 
        success: true, 
        message: 'All digital paths cleared',
        count: 0 
    });
});

// Stats endpoint
        totalScans: scanHistory.length,
            return acc;
        }, {}),
        lastScan: scanHistory[0] ? scanHistory[0].timestamp : null
    };
    
    res.json({ 
        success: true, 
        stats: stats,
        message: 'Qrossroads statistics'
    });
});

// Health check
    res.json({ 
        status: 'healthy',
        service: 'Qrossroads',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        message: 'Where Digital Paths Meet - Running Smoothly'
    });
});

// Serve main page
    res.sendFile(path.join(publicDir, 'index.html'));
});

// Serve favicon
    res.status(204).end();
});

// 404 handler
    res.status(404).json({
        success: false,
        error: 'Digital path not found',
        message: 'The requested pathway does not exist in Qrossroads'
    });
});

// Start server
    console.log('⚡══════════════════════════════════════⚡');
    console.log('           QROSSROADS ACTIVATED          ');
    console.log('⚡══════════════════════════════════════⚡');
    console.log('🎨 Style: Green Accent Version');
    console.log('📍 Tagline: Where Digital Paths Meet');
    console.log('💼 Professional QR Code Hub');
    console.log('💰 Amazon Price: $4.99 (Premium Value)');
    console.log('📱 Mobile Ready: Yes (Responsive Design)');
    console.log('🔒 Features: Scan, Generate, History, Export');
    console.log('⚡══════════════════════════════════════⚡');
    console.log('🚀 Ready to launch on Amazon Appstore!');
    console.log('⚡══════════════════════════════════════⚡');
});

// Error handling
    console.error('⚠️ Uncaught Exception:', err.message);
});

    console.error('⚠️ Unhandled Rejection:', err.message);
});
