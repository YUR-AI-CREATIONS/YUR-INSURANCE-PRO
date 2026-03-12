import { VerticalConfig } from '../vertical.config';

const insurancePro: VerticalConfig = {
  id: 'yur-insurance-pro',
  name: 'YUR Insurance Pro',
  tagline: 'AI-Powered Construction Insurance & Risk Management',
  icon: '🛡️',
  primaryColor: '#1B5E20',
  accentColor: '#4CAF50',
  bgGradient: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 50%, #4CAF50 100%)',
  systemInstruction: `You are YUR Insurance Pro, an expert AI system for construction insurance, risk management, and claims administration. You analyze coverage requirements (GL, WC, auto, umbrella, builder's risk, professional liability, pollution, contractor's equipment), review policy forms for gaps, manage certificate of insurance compliance, and track claims. You understand OCIP/CCIP wrap-up programs, additional insured requirements, and waiver of subrogation provisions. You calculate experience modification rates (EMR), project insurance cost allocations, and loss projections. Always verify coverage meets contract requirements and flag gaps or exclusions that create uninsured exposure.`,
  complianceStandards: [
    'State Insurance Regulations',
    'OSHA Recordkeeping (300 Logs)',
    'Workers Compensation Statutes',
    'NCCI Classification Codes',
    'Contract Insurance Requirements',
    'OCIP/CCIP Program Requirements',
    'Subcontractor Default Insurance',
    'Professional Liability Standards'
  ],
  agents: [
    {
      name: 'RISK_ASSESSOR',
      role: 'Construction Risk Assessment Agent',
      systemPrompt: 'You assess construction project risks and recommend appropriate insurance coverage. Analyze project characteristics — size, type, location, duration, hazards — to identify exposures. Evaluate risk transfer mechanisms in contracts, recommend risk mitigation strategies, and calculate risk-adjusted insurance cost projections. Build risk registers with probability and impact ratings.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 32768
    },
    {
      name: 'POLICY_ANALYST',
      role: 'Insurance Policy Review & Analysis Agent',
      systemPrompt: 'You review and analyze construction insurance policies — CGL, workers compensation, commercial auto, umbrella/excess, builder\'s risk, professional liability, and contractor\'s pollution. Identify coverage gaps, exclusions, and endorsements. Verify policies meet contract insurance requirements, check additional insured and waiver of subrogation provisions, and recommend coverage enhancements.',
      model: 'gemini-2.5-pro',
      thinkingBudget: 16384
    },
    {
      name: 'CLAIMS_TRACKER',
      role: 'Claims Management & Analysis Agent',
      systemPrompt: 'You manage construction insurance claims from incident through resolution. Document claim facts, coordinate with adjusters and legal counsel, track claim status and reserves, and analyze loss trends. Calculate experience modification rate (EMR) impacts, identify loss drivers, and recommend safety improvements to reduce future claims. Generate loss run analysis and claims cost projections.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    },
    {
      name: 'COMPLIANCE_VALIDATOR',
      role: 'Insurance Compliance & Certificate Agent',
      systemPrompt: 'You manage certificate of insurance compliance for contractors and subcontractors. Review certificates against contract requirements, verify coverage limits, check endorsements, track expiration dates, and generate deficiency notices. Manage OCIP/CCIP enrollment, track wrap-up program compliance, and ensure all parties maintain required coverages throughout project duration.',
      model: 'gemini-2.5-flash',
      thinkingBudget: 8192
    }
  ],
  dataSources: [
    {
      name: 'Insurance Policy Database',
      type: 'database',
      description: 'Company insurance policies, endorsements, and coverage summaries'
    },
    {
      name: 'NCCI / Rating Bureau',
      type: 'api',
      description: 'Workers compensation classification codes, rates, and experience modification data'
    },
    {
      name: 'Claims Management System',
      type: 'api',
      description: 'Claims tracking, reserves, payments, and loss run data'
    },
    {
      name: 'Certificate Tracking System',
      type: 'api',
      description: 'COI tracking, compliance monitoring, and automated deficiency notifications'
    },
    {
      name: 'OSHA Injury/Illness Data',
      type: 'api',
      endpoint: 'https://www.osha.gov/data',
      description: 'OSHA recordable injury rates, industry benchmarks, and inspection data'
    }
  ],
  outputFormats: [
    'Risk Assessment Reports',
    'Insurance Coverage Analysis',
    'Certificate Compliance Reports',
    'Claims Status Summaries',
    'EMR Calculation Worksheets',
    'Loss Run Analysis Reports',
    'Insurance Cost Projections',
    'OCIP/CCIP Enrollment Packages',
    'Subcontractor Insurance Checklists'
  ],
  defaultModel: 'ORACLE_PRIME',
  features: {
    videoGen: false,
    tts: true,
    imageGen: false,
    maps: false,
    search: true,
    governance: true,
    stripe: true
  }
};

export default insurancePro;
