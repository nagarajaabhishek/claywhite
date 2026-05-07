// Keyword mapping and intent clusters for SEO strategy
// Maps keywords to pages and content priorities

export interface KeywordCluster {
  primary: string;
  secondary: string[];
  intent: 'informational' | 'commercial' | 'transactional';
  targetPage: string;
  localModifiers?: string[];
}

export const keywordClusters: KeywordCluster[] = [
  // Fractional Leadership Cluster
  {
    primary: 'fractional coo',
    secondary: [
      'fractional chief operating officer',
      'fractional coo services',
      'fractional coo consultant',
      'fractional coo for startups',
      'fractional coo for fintech',
    ],
    intent: 'commercial',
    targetPage: '/services/fractional-leadership',
    localModifiers: ['dallas', 'orange county', 'texas', 'california'],
  },
  {
    primary: 'fractional cro',
    secondary: [
      'fractional chief risk officer',
      'fractional cro services',
      'fractional cro consultant',
      'fractional compliance officer',
      'fractional risk officer',
    ],
    intent: 'commercial',
    targetPage: '/services/fractional-leadership',
    localModifiers: ['dallas', 'orange county', 'texas', 'california'],
  },
  {
    primary: 'fractional executive leadership',
    secondary: [
      'fractional c-suite',
      'fractional executive services',
      'fractional leadership model',
      'fractional executive consulting',
    ],
    intent: 'commercial',
    targetPage: '/services/fractional-leadership',
  },

  // GRC & Compliance Cluster
  {
    primary: 'soc 2 compliance',
    secondary: [
      'soc 2 type 1',
      'soc 2 type 2',
      'soc 2 audit',
      'soc 2 readiness',
      'soc 2 consultant',
      'soc 2 preparation',
    ],
    intent: 'commercial',
    targetPage: '/services/company-services',
    localModifiers: ['dallas', 'orange county'],
  },
  {
    primary: 'hipaa compliance consultant',
    secondary: [
      'hipaa compliance services',
      'hipaa audit readiness',
      'hipaa compliance for healthcare tech',
      'hipaa consultant',
    ],
    intent: 'commercial',
    targetPage: '/services/company-services',
  },
  {
    primary: 'sox compliance',
    secondary: [
      'sox audit',
      'sox readiness',
      'sox compliance consultant',
      'sec sox compliance',
    ],
    intent: 'commercial',
    targetPage: '/services/company-services',
  },
  {
    primary: 'nist compliance',
    secondary: [
      'nist framework',
      'nist cybersecurity framework',
      'nist compliance consultant',
      'nist implementation',
    ],
    intent: 'commercial',
    targetPage: '/services/company-services',
  },
  {
    primary: 'grc advisory',
    secondary: [
      'governance risk compliance',
      'grc consulting',
      'grc services',
      'grc framework',
      'grc strategy',
    ],
    intent: 'commercial',
    targetPage: '/services/company-services',
  },

  // Investor Readiness Cluster
  {
    primary: 'investor ready compliance',
    secondary: [
      'investor ready',
      'due diligence compliance',
      'investor readiness',
      'fundraising compliance',
    ],
    intent: 'commercial',
    targetPage: '/',
  },
  {
    primary: 'audit readiness',
    secondary: [
      'compliance audit readiness',
      'audit preparation',
      'audit readiness consultant',
    ],
    intent: 'commercial',
    targetPage: '/services/company-services',
  },

  // Sector-Specific Clusters
  {
    primary: 'fintech compliance',
    secondary: [
      'fintech soc 2',
      'fintech regulatory compliance',
      'fintech grc',
      'fintech compliance consultant',
    ],
    intent: 'commercial',
    targetPage: '/services/company-services',
  },
  {
    primary: 'healthcare tech compliance',
    secondary: [
      'healthcare technology compliance',
      'healthtech hipaa',
      'healthcare tech grc',
    ],
    intent: 'commercial',
    targetPage: '/services/company-services',
  },

  // Local Search Clusters
  {
    primary: 'fractional coo dallas',
    secondary: [
      'fractional coo dallas tx',
      'fractional executive dallas',
      'dallas fractional coo',
    ],
    intent: 'commercial',
    targetPage: '/services/fractional-leadership',
  },
  {
    primary: 'grc consultant orange county',
    secondary: [
      'compliance consultant orange county',
      'orange county grc',
      'oc compliance consultant',
    ],
    intent: 'commercial',
    targetPage: '/services/company-services',
  },
];

// Generate keyword variations for content
export function generateKeywordVariations(cluster: KeywordCluster): string[] {
  const variations: string[] = [cluster.primary, ...cluster.secondary];
  
  if (cluster.localModifiers) {
    const localVariations: string[] = [];
    cluster.localModifiers.forEach((modifier) => {
      localVariations.push(`${cluster.primary} ${modifier}`);
      cluster.secondary.forEach((secondary) => {
        localVariations.push(`${secondary} ${modifier}`);
      });
    });
    variations.push(...localVariations);
  }
  
  return variations;
}

// Get keywords for a specific page
export function getKeywordsForPage(pagePath: string): string[] {
  const clusters = keywordClusters.filter((c) => c.targetPage === pagePath);
  const allKeywords: string[] = [];
  
  clusters.forEach((cluster) => {
    allKeywords.push(...generateKeywordVariations(cluster));
  });
  
  return [...new Set(allKeywords)];
}
