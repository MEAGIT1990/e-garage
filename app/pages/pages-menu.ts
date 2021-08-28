import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard production',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard-production',
    home: true,
    // hidden:true
  },
  {
    title: 'Dashboard financier',
    icon: 'home-outline',
    link: '/pages/dashboard-financier',
  },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
  {
    title: 'Accueil',
    icon: 'layout-outline',
    children: [
      
      // {
      //   title: 'List',
      //   link: '/pages/layout/list',
      // },
      // {
      //   title: 'Infinite List',
      //   link: '/pages/layout/infinite-list',
      // },
      // {
      //   title: 'Accordion',
      //   link: '/pages/layout/accordion',
      // },
      {
        title: 'Client',
        link: '/pages/accueil/client',
      },
      
      {
        title: 'Saisie véhicule',
        link: '/pages/accueil/saisie-vehicule',
      },
      {
        title: 'Ouverture de dossier',
        pathMatch: 'prefix',
        link: '/pages/accueil/ouverture-dossier',
      }
    ],
  },
  {
    title: 'Diagnostic',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Saisie diagnostic',
        link: '/pages/diagnostic/saisie-diagnostic',
      },
      {
        title: 'Devis',
        link: '/pages/diagnostic/devis',
      }
    ],
  },
  {
    title: 'Atélier',
    icon: 'keypad-outline',
    children: [
      {
        title: 'Ordre reparation',
        link: '/pages/atelier/ordre-reparation',
      },
      {
        title: 'Affectation',
        link: '/pages/atelier/affectation',
      },
      {
        title: 'Intervention',
        link: '/pages/atelier/intervention',
      }
    ],
  },
  {
    title: 'Control qualité',
    icon: 'browser-outline',
    children: [
      {
        title: 'Test réparation',
        link: '/pages/control-qualite/test-reparation',
      },
      
    ],
  },
  {
    title: 'Bon de sortie',
    icon: 'message-circle-outline',
    link: '/pages/bon-de-sortie',
    // children: [
    //   {
    //     title: 'Calendar',
    //     link: '/pages/extra-components/calendar',
    //   },
      
    // ],
  },
  {
    title: 'Facturation',
    icon: 'map-outline',
    children: [
      {
        title: 'Edition facture',
        link: '/pages/facturation/edition-facture',
      },
    
    ],
  },
  {
    title: 'Caisse',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Reglement accompte',
        link: '/pages/caisse/reglement-accompte',
      },
      {
        title: 'Reglement facture',
        link: '/pages/caisse/reglement-facture',

      },
      
    ],
  },
  {
    title: 'Recouvrement',
    icon: 'text-outline',
    link: '/pages/recouvrement',
    // children: [
    //   {
    //     title: 'TinyMCE',
    //     link: '/pages/editors/tinymce',
    //   },
    //   {
    //     title: 'CKEditor',
    //     link: '/pages/editors/ckeditor',
    //   },
    // ],
  },
  {
    title: 'Parametrage',
    icon: 'grid-outline',
    children: [
      {
        title: 'Module reception',
        link: '/pages/parametrage/autres-parametres',
      },
      // {
      //   title: 'Module diagnostic',
      //   link: '/pages/parametrage/autres-parametres',
      // },{
      //   title: 'Module atelier',
      //   link: '/pages/parametrage/autres-parametres',
      // },{
      //   title: 'Module facturation',
      //   link: '/pages/parametrage/autres-parametres',
      // }
    ],
  },
  {
    title: 'Administration',
    icon: 'lock-outline',
    children: [
      {
        title: 'Utilisateur',
        link: '/pages/administration/utilisateur',
      },
      {
        title: 'Role',
        link: '/pages/administration/role',

      },
      {
        title: 'Fonctionnalité',
        link: '/pages/administration/fonctionnalite',

      }
    ],
  },
];
