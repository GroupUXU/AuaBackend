import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentPartsLead extends Schema.Component {
  collectionName: 'components_content_parts_leads';
  info: {
    displayName: 'lead';
    description: '';
  };
  attributes: {
    lead: Attribute.Text &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 160;
        maxLength: 300;
      }>;
  };
}

export interface ContentPartsMaps extends Schema.Component {
  collectionName: 'components_content_parts_maps';
  info: {
    displayName: 'GoogleMaps';
    description: '';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface ContentPartsMedia extends Schema.Component {
  collectionName: 'components_content_parts_media';
  info: {
    displayName: 'media';
    description: '';
  };
  attributes: {
    media: Attribute.Media & Attribute.Required;
  };
}

export interface ContentPartsQuote extends Schema.Component {
  collectionName: 'components_content_parts_quotes';
  info: {
    displayName: 'quote';
    description: '';
  };
  attributes: {
    quote: Attribute.Text & Attribute.Required;
  };
}

export interface ContentPartsTxt extends Schema.Component {
  collectionName: 'components_content_parts_txts';
  info: {
    displayName: 'txt';
    description: '';
  };
  attributes: {
    txt: Attribute.RichText & Attribute.Required;
  };
}

export interface ContentPartsYouTube extends Schema.Component {
  collectionName: 'components_content_parts_you_tubes';
  info: {
    displayName: 'gallery';
    description: '';
  };
  attributes: {
    gallery: Attribute.Media & Attribute.Required;
  };
}

export interface ContentPartsYoutube extends Schema.Component {
  collectionName: 'components_content_parts_youtubes';
  info: {
    displayName: 'youtube';
  };
  attributes: {
    url: Attribute.String & Attribute.Required;
  };
}

export interface OthersDokumenty extends Schema.Component {
  collectionName: 'components_others_dokumenties';
  info: {
    displayName: 'dokumenty';
    icon: 'file';
  };
  attributes: {
    dokumenty: Attribute.Media & Attribute.Required;
  };
}

export interface OthersEmail extends Schema.Component {
  collectionName: 'components_others_emails';
  info: {
    displayName: 'email';
    description: '';
  };
  attributes: {
    email: Attribute.Email & Attribute.Required;
  };
}

export interface OthersPhone extends Schema.Component {
  collectionName: 'components_others_phones';
  info: {
    displayName: 'phone';
    description: '';
  };
  attributes: {
    phone: Attribute.String & Attribute.Required;
    typ: Attribute.Enumeration<['mobile', 'home', 'fax']>;
  };
}

export interface OthersPlanowanyKontakt extends Schema.Component {
  collectionName: 'components_others_planowany_kontakts';
  info: {
    displayName: 'planowanyKontakt';
    icon: 'calendar';
  };
  attributes: {
    kiedy: Attribute.DateTime & Attribute.Required;
    uwagi: Attribute.Text;
  };
}

export interface OthersSeo extends Schema.Component {
  collectionName: 'components_others_seos';
  info: {
    displayName: 'SEO';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Unique;
    description: Attribute.Text & Attribute.Unique;
  };
}

export interface OthersSplacone extends Schema.Component {
  collectionName: 'components_others_splacones';
  info: {
    displayName: 'splacone';
    icon: 'calendar';
  };
  attributes: {
    data: Attribute.Date & Attribute.Required;
    kwota: Attribute.String & Attribute.Required;
  };
}

export interface OthersStatus extends Schema.Component {
  collectionName: 'components_others_statuses';
  info: {
    displayName: 'status';
    icon: 'check';
  };
  attributes: {
    typ: Attribute.Enumeration<['odrzucony', 'zaakceptowany']> &
      Attribute.Required;
    wiadomosc: Attribute.Text;
  };
}

export interface OthersTypPozyczki extends Schema.Component {
  collectionName: 'components_others_typ_pozyczkis';
  info: {
    displayName: 'typPozyczki';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    typ: Attribute.Enumeration<['pozyczka', 'kredyt', 'hipoteka']>;
  };
}

export interface StatsViews extends Schema.Component {
  collectionName: 'components_stats_views';
  info: {
    displayName: 'views';
    description: '';
  };
  attributes: {
    views: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<1>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content-parts.lead': ContentPartsLead;
      'content-parts.maps': ContentPartsMaps;
      'content-parts.media': ContentPartsMedia;
      'content-parts.quote': ContentPartsQuote;
      'content-parts.txt': ContentPartsTxt;
      'content-parts.you-tube': ContentPartsYouTube;
      'content-parts.youtube': ContentPartsYoutube;
      'others.dokumenty': OthersDokumenty;
      'others.email': OthersEmail;
      'others.phone': OthersPhone;
      'others.planowany-kontakt': OthersPlanowanyKontakt;
      'others.seo': OthersSeo;
      'others.splacone': OthersSplacone;
      'others.status': OthersStatus;
      'others.typ-pozyczki': OthersTypPozyczki;
      'stats.views': StatsViews;
    }
  }
}
