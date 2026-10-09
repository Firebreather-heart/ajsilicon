/**
 * A.J. Silicon Learning Platform — Interactive Prototype HUD
 * Allows clients & stakeholders to seamlessly navigate all 115 design screens.
 */
(function() {
  const screens = [{"folder": "00_component_library_sheet_1", "title": "00 Component Library Sheet", "category": "Design & Architecture", "file": "00_component_library_sheet_1/code.html"}, {"folder": "00_component_library_sheet_2", "title": "00 Component Library Sheet", "category": "Design & Architecture", "file": "00_component_library_sheet_2/code.html"}, {"folder": "01_student_application_shell_1", "title": "01 Student Application Shell 1", "category": "Auth & Onboarding", "file": "01_student_application_shell_1/code.html"}, {"folder": "01_student_application_shell_2", "title": "01 Student Application Shell 2", "category": "Auth & Onboarding", "file": "01_student_application_shell_2/code.html"}, {"folder": "01_student_application_shell_3", "title": "01 Student Application Shell 3", "category": "Auth & Onboarding", "file": "01_student_application_shell_3/code.html"}, {"folder": "02_staff_application_shell_1", "title": "Staff Application Shell Specification", "category": "Auth & Onboarding", "file": "02_staff_application_shell_1/code.html"}, {"folder": "02_staff_application_shell_2", "title": "Staff Application Shell Specification", "category": "Auth & Onboarding", "file": "02_staff_application_shell_2/code.html"}, {"folder": "02_staff_application_shell_3", "title": "Staff Application Shell Specification", "category": "Auth & Onboarding", "file": "02_staff_application_shell_3/code.html"}, {"folder": "03_sign_up", "title": "03 Sign Up", "category": "Auth & Onboarding", "file": "03_sign_up/code.html"}, {"folder": "04_verify_account_1", "title": "04 Verify account - Specification & Interactive State Matrix", "category": "Auth & Onboarding", "file": "04_verify_account_1/code.html"}, {"folder": "04_verify_account_2", "title": "04 Verify Account 2", "category": "Auth & Onboarding", "file": "04_verify_account_2/code.html"}, {"folder": "05_log_in", "title": "Log in Specification", "category": "Auth & Onboarding", "file": "05_log_in/code.html"}, {"folder": "06_two_factor_verification", "title": "06 Two Factor Verification", "category": "Auth & Onboarding", "file": "06_two_factor_verification/code.html"}, {"folder": "07_password_reset_flow", "title": "07 Password Reset Flow", "category": "Auth & Onboarding", "file": "07_password_reset_flow/code.html"}, {"folder": "08_register_this_device", "title": "08 Register This Device", "category": "Auth & Onboarding", "file": "08_register_this_device/code.html"}, {"folder": "09_profile_completion", "title": "Profile Completion UI Specification", "category": "Auth & Onboarding", "file": "09_profile_completion/code.html"}, {"folder": "10_accept_content_licence", "title": "10 Accept Content Licence", "category": "Auth & Onboarding", "file": "10_accept_content_licence/code.html"}, {"folder": "11_staff_first_sign_in_setup", "title": "11 Staff First Sign In Setup", "category": "Auth & Onboarding", "file": "11_staff_first_sign_in_setup/code.html"}, {"folder": "12_staff_invitation_landing", "title": "12 Staff Invitation Landing", "category": "Auth & Onboarding", "file": "12_staff_invitation_landing/code.html"}, {"folder": "13_programme_catalogue", "title": "13 Programme Catalogue", "category": "Public & Marketing", "file": "13_programme_catalogue/code.html"}, {"folder": "14_programme_detail", "title": "14 Programme Detail", "category": "Public & Marketing", "file": "14_programme_detail/code.html"}, {"folder": "15_corporate_training_enquiry", "title": "15 Corporate Training Enquiry", "category": "Public & Marketing", "file": "15_corporate_training_enquiry/code.html"}, {"folder": "16_public_certificate_verification", "title": "16 Public Certificate Verification", "category": "Public & Marketing", "file": "16_public_certificate_verification/code.html"}, {"folder": "17_legal_page_template", "title": "17 Legal Page Template", "category": "Public & Marketing", "file": "17_legal_page_template/code.html"}, {"folder": "18_contact", "title": "Contact Specification Board", "category": "Public & Marketing", "file": "18_contact/code.html"}, {"folder": "19_select_cohort", "title": "19 Select Cohort", "category": "Enrolment & Checkout", "file": "19_select_cohort/code.html"}, {"folder": "20_checkout_1", "title": "20 Checkout 1", "category": "Enrolment & Checkout", "file": "20_checkout_1/code.html"}, {"folder": "20_checkout_2", "title": "20 Checkout 2", "category": "Enrolment & Checkout", "file": "20_checkout_2/code.html"}, {"folder": "21_awaiting_bank_transfer", "title": "21 Awaiting Bank Transfer", "category": "Enrolment & Checkout", "file": "21_awaiting_bank_transfer/code.html"}, {"folder": "22_payment_success", "title": "22 Payment Success", "category": "Enrolment & Checkout", "file": "22_payment_success/code.html"}, {"folder": "23_confirming_your_payment", "title": "23 Confirming Your Payment", "category": "Enrolment & Checkout", "file": "23_confirming_your_payment/code.html"}, {"folder": "24_extend_access", "title": "24 Extend Access", "category": "Enrolment & Checkout", "file": "24_extend_access/code.html"}, {"folder": "25_payment_methods_and_subscriptions", "title": "25 Payment Methods And Subscriptions", "category": "Enrolment & Checkout", "file": "25_payment_methods_and_subscriptions/code.html"}, {"folder": "26_subscription_checkout", "title": "26 Subscription Checkout", "category": "Enrolment & Checkout", "file": "26_subscription_checkout/code.html"}, {"folder": "27_renewal_failed", "title": "27 Renewal Failed", "category": "Enrolment & Checkout", "file": "27_renewal_failed/code.html"}, {"folder": "28_student_dashboard", "title": "Student Dashboard Specification", "category": "Student Experience", "file": "28_student_dashboard/code.html"}, {"folder": "29_programme_home", "title": "29 Programme Home", "category": "Student Experience", "file": "29_programme_home/code.html"}, {"folder": "30_lesson_player", "title": "30 Lesson Player Specification Board", "category": "Student Experience", "file": "30_lesson_player/code.html"}, {"folder": "31_protected_document_reader", "title": "31 Protected Document Reader Specification Board", "category": "Student Experience", "file": "31_protected_document_reader/code.html"}, {"folder": "32_live_classes", "title": "Screen 32: Live classes Specification Board", "category": "Student Experience", "file": "32_live_classes/code.html"}, {"folder": "33_recordings_library_1", "title": "Screen 33: Recordings Library Specification Board", "category": "Student Experience", "file": "33_recordings_library_1/code.html"}, {"folder": "33_recordings_library_2", "title": "Recordings Library", "category": "Student Experience", "file": "33_recordings_library_2/code.html"}, {"folder": "34_practice_hub", "title": "34 Practice Hub Specification Board", "category": "Student Experience", "file": "34_practice_hub/code.html"}, {"folder": "35_exam_runner", "title": "Specification Board: 35 Exam Runner", "category": "Student Experience", "file": "35_exam_runner/code.html"}, {"folder": "36_exam_results", "title": "36 Exam Results", "category": "Student Experience", "file": "36_exam_results/code.html"}, {"folder": "37_answer_review", "title": "37 Answer Review Specification Board", "category": "Student Experience", "file": "37_answer_review/code.html"}, {"folder": "38_progress", "title": "38 Progress & Readiness Analytics Specification Board", "category": "Student Experience", "file": "38_progress/code.html"}, {"folder": "39_certificates_and_credits_1", "title": "39 Certificates and credits Specification Board", "category": "Student Experience", "file": "39_certificates_and_credits_1/code.html"}, {"folder": "39_certificates_and_credits_2", "title": "Specification Board: 39 Certificates and credits", "category": "Student Experience", "file": "39_certificates_and_credits_2/code.html"}, {"folder": "40_notifications", "title": "Student Notifications", "category": "Student Experience", "file": "40_notifications/code.html"}, {"folder": "41_help_centre_1", "title": "Help Centre (Specification Screen)", "category": "Student Experience", "file": "41_help_centre_1/code.html"}, {"folder": "41_help_centre_2", "title": "Help Centre", "category": "Student Experience", "file": "41_help_centre_2/code.html"}, {"folder": "42_account_settings_1", "title": "42 Account Settings 1", "category": "Student Experience", "file": "42_account_settings_1/code.html"}, {"folder": "42_account_settings_2", "title": "Account Settings Specification", "category": "Student Experience", "file": "42_account_settings_2/code.html"}, {"folder": "43_devices_and_sessions_1", "title": "43 Devices And Sessions 1", "category": "Student Experience", "file": "43_devices_and_sessions_1/code.html"}, {"folder": "43_devices_and_sessions_2", "title": "43 Devices And Sessions 2", "category": "Student Experience", "file": "43_devices_and_sessions_2/code.html"}, {"folder": "44_billing_and_licences", "title": "44 Billing and licences", "category": "Student Experience", "file": "44_billing_and_licences/code.html"}, {"folder": "45_join_live_class_dialog", "title": "45 Join Live Class Dialog Specification", "category": "Student Experience", "file": "45_join_live_class_dialog/code.html"}, {"folder": "46_student_access_interruption_states", "title": "46 Student Access Interruption & Account State Barriers - A.J. Silicon", "category": "Student Experience", "file": "46_student_access_interruption_states/code.html"}, {"folder": "47_error_and_interruption_states_1", "title": "Specification Board: 47 Error & Interruption States", "category": "Student Experience", "file": "47_error_and_interruption_states_1/code.html"}, {"folder": "47_error_and_interruption_states_2", "title": "Error & Interruption States Specification (Spec 47)", "category": "Student Experience", "file": "47_error_and_interruption_states_2/code.html"}, {"folder": "48_system_exception_empty_and_status_pages", "title": "A.J. Silicon Academy - Learning Platform Status & System States", "category": "Student Experience", "file": "48_system_exception_empty_and_status_pages/code.html"}, {"folder": "49_consent_privacy_and_access_authorization_states", "title": "Specification Board: 49 Consent, Privacy & Access Authorization States - A.J. Silicon", "category": "Student Experience", "file": "49_consent_privacy_and_access_authorization_states/code.html"}, {"folder": "a.j._silicon_academy_learning_training_platform", "title": "A.J. Silicon Academy Learning Training Platform", "category": "Design & Architecture", "file": "a.j._silicon_academy_learning_training_platform/code.html"}, {"folder": "a.j._silicon_institutional_logo", "title": "A.J. Silicon Institutional Logo", "category": "Design & Architecture", "file": "a.j._silicon_institutional_logo/code.html"}, {"folder": "admin_dashboard", "title": "Admin Dashboard", "category": "Admin & Operations", "file": "admin_dashboard/code.html"}, {"folder": "announcement_composer", "title": "Announcement Composer", "category": "Faculty Portal", "file": "announcement_composer/code.html"}, {"folder": "approvals_1", "title": "Approvals 1", "category": "Admin & Operations", "file": "approvals_1/code.html"}, {"folder": "approvals_2", "title": "Approvals 2", "category": "Admin & Operations", "file": "approvals_2/code.html"}, {"folder": "audit_log", "title": "A.J. SILICON AUDIT PORTAL \u2014 Immutable Audit Trail & Logs", "category": "Admin & Operations", "file": "audit_log/code.html"}, {"folder": "certificates", "title": "A.J. SILICON AUDIT PORTAL \u2014 Certificates & Credentials", "category": "Admin & Operations", "file": "certificates/code.html"}, {"folder": "cohort_analytics", "title": "Cohort Analytics", "category": "Admin & Operations", "file": "cohort_analytics/code.html"}, {"folder": "cohort_roster", "title": "Cohort Roster", "category": "Admin & Operations", "file": "cohort_roster/code.html"}, {"folder": "cohorts", "title": "Cohorts", "category": "Admin & Operations", "file": "cohorts/code.html"}, {"folder": "content_library", "title": "Content Library", "category": "Admin & Operations", "file": "content_library/code.html"}, {"folder": "content_manager", "title": "Content Manager", "category": "Admin & Operations", "file": "content_manager/code.html"}, {"folder": "coupons", "title": "Coupons", "category": "Admin & Operations", "file": "coupons/code.html"}, {"folder": "enrolment_actions_dialogs", "title": "Enrolment Actions Dialogs", "category": "Admin & Operations", "file": "enrolment_actions_dialogs/code.html"}, {"folder": "exam_builder", "title": "Exam Builder", "category": "Faculty Portal", "file": "exam_builder/code.html"}, {"folder": "faculty_home", "title": "Faculty Home", "category": "Faculty Portal", "file": "faculty_home/code.html"}, {"folder": "invoices", "title": "A.J. Silicon Secure Portal - Invoices & VAT Ledger", "category": "Admin & Operations", "file": "invoices/code.html"}, {"folder": "leak_investigation", "title": "Leak Investigation", "category": "Admin & Operations", "file": "leak_investigation/code.html"}, {"folder": "live_session_scheduler", "title": "Live Session Scheduler", "category": "Faculty Portal", "file": "live_session_scheduler/code.html"}, {"folder": "live_sessions", "title": "Live Sessions", "category": "Faculty Portal", "file": "live_sessions/code.html"}, {"folder": "message_templates", "title": "Message Templates", "category": "Admin & Operations", "file": "message_templates/code.html"}, {"folder": "pay_05_payment_failed_or_abandoned", "title": "PAY-05: Payment Status & Resolution Engine - A.J. Silicon", "category": "Enrolment & Checkout", "file": "pay_05_payment_failed_or_abandoned/code.html"}, {"folder": "programmes_list_and_editor", "title": "A.J. Silicon Secure Portal | Programmes Management & Editor", "category": "Design & Architecture", "file": "programmes_list_and_editor/code.html"}, {"folder": "pub_01_home", "title": "A.J. Silicon | Professional Certification & IT Governance Training", "category": "Public & Marketing", "file": "pub_01_home/code.html"}, {"folder": "quarterly_access_review", "title": "Quarterly Access Review", "category": "Admin & Operations", "file": "quarterly_access_review/code.html"}, {"folder": "question_bank_1", "title": "Question Bank 1", "category": "Faculty Portal", "file": "question_bank_1/code.html"}, {"folder": "question_bank_2", "title": "Question Bank 2", "category": "Faculty Portal", "file": "question_bank_2/code.html"}, {"folder": "question_editor", "title": "Question Editor", "category": "Faculty Portal", "file": "question_editor/code.html"}, {"folder": "question_review_queue", "title": "Question Review Queue", "category": "Faculty Portal", "file": "question_review_queue/code.html"}, {"folder": "refunds", "title": "Refunds & Settlement Reversals | A.J. Silicon Secure Portal", "category": "Admin & Operations", "file": "refunds/code.html"}, {"folder": "reports", "title": "A.J. Silicon Academy - Enterprise Audit & Reporting Hub", "category": "Admin & Operations", "file": "reports/code.html"}, {"folder": "revision_clinic", "title": "Revision Clinic", "category": "Faculty Portal", "file": "revision_clinic/code.html"}, {"folder": "role_editor", "title": "Role Editor", "category": "Admin & Operations", "file": "role_editor/code.html"}, {"folder": "roles", "title": "Roles", "category": "Admin & Operations", "file": "roles/code.html"}, {"folder": "security_alerts", "title": "Security Alerts", "category": "Admin & Operations", "file": "security_alerts/code.html"}, {"folder": "settings", "title": "Settings", "category": "Admin & Operations", "file": "settings/code.html"}, {"folder": "staff", "title": "Staff", "category": "Admin & Operations", "file": "staff/code.html"}, {"folder": "staff_detail_and_invite", "title": "Staff Detail And Invite", "category": "Admin & Operations", "file": "staff_detail_and_invite/code.html"}, {"folder": "state_a_licence_and_access_states", "title": "Licence & Access States (STATE-A Specification Board)", "category": "Student Experience", "file": "state_a_licence_and_access_states/code.html"}, {"folder": "state_b_account_and_playback_states", "title": "Specification Board STATE-B: Account & Playback States", "category": "Student Experience", "file": "state_b_account_and_playback_states/code.html"}, {"folder": "student_detail_chinedu_eze", "title": "Student Detail Chinedu Eze", "category": "Admin & Operations", "file": "student_detail_chinedu_eze/code.html"}, {"folder": "subscription_plans", "title": "Subscription Plans", "category": "Admin & Operations", "file": "subscription_plans/code.html"}, {"folder": "subscription_plans_and_billing", "title": "Subscriptions & Billing Management - A.J. SILICON AUDIT PORTAL", "category": "Admin & Operations", "file": "subscription_plans_and_billing/code.html"}, {"folder": "support_inbox", "title": "Support Inbox", "category": "Admin & Operations", "file": "support_inbox/code.html"}, {"folder": "system_health", "title": "System Health", "category": "Admin & Operations", "file": "system_health/code.html"}, {"folder": "transactions", "title": "Transactions & Ledger \u2014 A.J. Silicon Secure Portal", "category": "Admin & Operations", "file": "transactions/code.html"}, {"folder": "upload_content", "title": "Upload Content", "category": "Admin & Operations", "file": "upload_content/code.html"}, {"folder": "user_detail_chinedu_eze", "title": "User Detail Chinedu Eze", "category": "Admin & Operations", "file": "user_detail_chinedu_eze/code.html"}, {"folder": "users", "title": "Users", "category": "Admin & Operations", "file": "users/code.html"}, {"folder": "view_as_student_session", "title": "View As Student Session", "category": "Student Experience", "file": "view_as_student_session/code.html"}, {"folder": "webhooks_and_reconciliation", "title": "Webhooks And Reconciliation", "category": "Admin & Operations", "file": "webhooks_and_reconciliation/code.html"}];

  // Determine relative root
  const currentPath = window.location.pathname;
  const isSubScreen = currentPath.includes('/stitch_a.j._silicon_learning_platform/');
  
  function getUrl(targetFolder) {
    if (isSubScreen) {
      return '../' + targetFolder + '/code.html';
    } else {
      return 'stitch_a.j._silicon_learning_platform/' + targetFolder + '/code.html';
    }
  }

  function getHomeUrl() {
    if (isSubScreen) {
      return '../../index.html';
    } else {
      return 'index.html';
    }
  }

  // Identify current active folder
  let activeFolder = '';
  const match = currentPath.match(/stitch_a\.j\._silicon_learning_platform\/([^\/]+)/);
  if (match) {
    activeFolder = match[1];
  } else if (currentPath.endsWith('index.html') || currentPath.endsWith('/')) {
    activeFolder = 'pub_01_home';
  }

  // Inject Styles
  const style = document.createElement('style');
  style.textContent = `
    #ajs-demo-pill {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 999999;
      display: flex;
      align-items: center;
      gap: 10px;
      background: #0B1320;
      color: #FFFFFF;
      padding: 10px 18px;
      border-radius: 9999px;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.15);
      font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      user-select: none;
    }
    #ajs-demo-pill:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 30px -4px rgba(0, 0, 0, 0.6), 0 0 0 2px #3B82F6;
      background: #111E33;
    }
    #ajs-demo-pill .badge {
      background: #2563EB;
      color: #FFFFFF;
      font-size: 11px;
      padding: 2px 7px;
      border-radius: 999px;
      font-weight: 700;
    }
    #ajs-modal-overlay {
      display: none;
      position: fixed;
      inset: 0;
      background: rgba(11, 19, 32, 0.8);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      z-index: 1000000;
      align-items: center;
      justify-content: center;
      padding: 20px;
      box-sizing: border-box;
      font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }
    #ajs-modal {
      background: #0F172A;
      color: #E2E8F0;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      width: 100%;
      max-width: 980px;
      max-height: 85vh;
      display: flex;
      flex-direction: column;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
      overflow: hidden;
    }
    #ajs-modal-header {
      padding: 18px 24px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #0B1320;
    }
    #ajs-modal-header h3 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: #F8FAFC;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    #ajs-modal-close {
      background: rgba(255, 255, 255, 0.08);
      border: none;
      color: #94A3B8;
      width: 32px;
      height: 32px;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      transition: background 0.15s, color 0.15s;
    }
    #ajs-modal-close:hover {
      background: rgba(255, 255, 255, 0.15);
      color: #FFFFFF;
    }
    #ajs-modal-controls {
      padding: 16px 24px;
      background: #111827;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    #ajs-search-input {
      width: 100%;
      box-sizing: border-box;
      background: #1E293B;
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 8px;
      padding: 10px 14px;
      color: #FFFFFF;
      font-size: 14px;
      outline: none;
      transition: border 0.15s;
    }
    #ajs-search-input:focus {
      border-color: #3B82F6;
    }
    .ajs-tabs {
      display: flex;
      gap: 6px;
      overflow-x: auto;
      padding-bottom: 4px;
    }
    .ajs-tab {
      background: rgba(255, 255, 255, 0.05);
      color: #94A3B8;
      border: none;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.15s;
    }
    .ajs-tab:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #FFFFFF;
    }
    .ajs-tab.active {
      background: #2563EB;
      color: #FFFFFF;
      font-weight: 600;
    }
    #ajs-screen-list {
      padding: 16px 24px;
      overflow-y: auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 10px;
    }
    .ajs-screen-card {
      background: #1E293B;
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 8px;
      padding: 12px;
      text-decoration: none;
      color: inherit;
      display: flex;
      flex-direction: column;
      gap: 6px;
      transition: all 0.15s;
    }
    .ajs-screen-card:hover {
      background: #283548;
      border-color: #3B82F6;
      transform: translateY(-1px);
    }
    .ajs-screen-card.current {
      border-color: #10B981;
      background: rgba(16, 185, 129, 0.1);
    }
    .ajs-card-tag {
      font-size: 10px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: #60A5FA;
    }
    .ajs-card-title {
      font-size: 13px;
      font-weight: 600;
      color: #F1F5F9;
      line-height: 1.3;
    }
    .ajs-card-id {
      font-size: 11px;
      color: #64748B;
      font-family: monospace;
    }
  `;
  document.head.appendChild(style);

  // Floating Pill Button
  const pill = document.createElement('div');
  pill.id = 'ajs-demo-pill';
  pill.innerHTML = `
    <span>🧭 Interactive Prototype Navigator</span>
    <span class="badge">${screens.length} Screens</span>
  `;
  document.body.appendChild(pill);

  // Overlay Modal
  const overlay = document.createElement('div');
  overlay.id = 'ajs-modal-overlay';
  overlay.innerHTML = `
    <div id="ajs-modal">
      <div id="ajs-modal-header">
        <h3>
          <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#10B981;"></span>
          A.J. Silicon Platform — Client Prototype Hub
        </h3>
        <button id="ajs-modal-close">&times;</button>
      </div>
      <div id="ajs-modal-controls">
        <input id="ajs-search-input" type="text" placeholder="Search screens by name, flow, or code (e.g. 'exam', 'login', 'billing')..." autofocus />
        <div class="ajs-tabs">
          <button class="ajs-tab active" data-cat="ALL">All (${screens.length})</button>
          <button class="ajs-tab" data-cat="Public & Marketing">🌐 Public Website</button>
          <button class="ajs-tab" data-cat="Auth & Onboarding">🔐 Auth & Setup</button>
          <button class="ajs-tab" data-cat="Enrolment & Checkout">💳 Enrolment & Pay</button>
          <button class="ajs-tab" data-cat="Student Experience">🎓 Student Portal</button>
          <button class="ajs-tab" data-cat="Faculty Portal">👨‍🏫 Faculty Portal</button>
          <button class="ajs-tab" data-cat="Admin & Operations">⚙️ Admin Suite</button>
        </div>
      </div>
      <div id="ajs-screen-list"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  const screenList = overlay.querySelector('#ajs-screen-list');
  const searchInput = overlay.querySelector('#ajs-search-input');
  const tabs = overlay.querySelectorAll('.ajs-tab');
  let currentCategory = 'ALL';
  let searchQuery = '';

  function renderScreens() {
    screenList.innerHTML = '';
    const filtered = screens.filter(s => {
      const matchCat = (currentCategory === 'ALL' || s.category === currentCategory);
      const matchSearch = !searchQuery || 
        s.title.toLowerCase().includes(searchQuery) || 
        s.folder.toLowerCase().includes(searchQuery) ||
        s.category.toLowerCase().includes(searchQuery);
      return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
      screenList.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 40px; color:#64748B;">No matching screens found.</div>';
      return;
    }

    filtered.forEach(s => {
      const card = document.createElement('a');
      card.className = 'ajs-screen-card' + (s.folder === activeFolder ? ' current' : '');
      card.href = getUrl(s.folder);
      card.innerHTML = `
        <div class="ajs-card-tag">${s.category} ${s.folder === activeFolder ? '• <span style="color:#10B981;">CURRENT PAGE</span>' : ''}</div>
        <div class="ajs-card-title">${s.title}</div>
        <div class="ajs-card-id">${s.folder}</div>
      `;
      screenList.appendChild(card);
    });
  }

  // Open / Close events
  pill.addEventListener('click', () => {
    overlay.style.display = 'flex';
    searchInput.focus();
    renderScreens();
  });

  overlay.querySelector('#ajs-modal-close').addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.style.display = 'none';
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.style.display === 'flex') {
      overlay.style.display = 'none';
    }
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      overlay.style.display = 'flex';
      searchInput.focus();
      renderScreens();
    }
  });

  // Search event
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderScreens();
  });

  // Tab filter events
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.getAttribute('data-cat');
      renderScreens();
    });
  });

  renderScreens();
})();
