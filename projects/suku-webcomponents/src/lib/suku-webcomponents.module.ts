import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { SukuACHSettingsComponent } from '../lib/suku-achsettings/suku-achsettings.component';
import { SukuTransactionHistoryComponent } from '../lib/suku-transaction-history/suku-transaction-history.component';
import { SukuFundingSourceComponent } from '../lib/suku-funding-source/suku-funding-source.component';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import { SukuHeadingComponent } from './suku-heading/suku-heading.component';
import { SukuSubHeadingComponent } from './suku-sub-heading/suku-sub-heading.component';
import { SukuProfileWidgetComponent } from './suku-profile-widget/suku-profile-widget.component';
import { SukuNotificationWidgetComponent } from './suku-notification-widget/suku-notification-widget.component';
import { SukuMailWidgetComponent } from './suku-mail-widget/suku-mail-widget.component';
import { SukuBidInfoComponent } from './suku-bid-info/suku-bid-info.component';
import { SukuMatchChipComponent } from './suku-match-chip/suku-match-chip.component';
import { SukuCardLineComponent } from './suku-card-line/suku-card-line.component';
import { SukuDashboardProfileComponent } from './suku-dashboard-profile/suku-dashboard-profile.component';
import { SukuNavSubmenuComponent } from './suku-nav-submenu/suku-nav-submenu.component';
import { SukuProgressBarComponent } from './suku-progress-bar/suku-progress-bar.component';
import { SukuHomeItalicHeadingComponent } from './suku-home-italic-heading/suku-home-italic-heading.component';
import { SukuLinkComponent } from './suku-link/suku-link.component';
import { SukuAddWidgetComponent } from './suku-add-widget/suku-add-widget.component';
import { SukuSelectInputComponent } from './suku-select-input/suku-select-input.component';
import { SukuPhoneWidgetComponent } from './suku-phone-widget/suku-phone-widget.component';
import { SukuAddressWidgetComponent } from './suku-address-widget/suku-address-widget.component';
import { SukuInlineDropdownComponent } from './suku-inline-dropdown/suku-inline-dropdown.component';
import { SukuHomeWidgetComponent } from './suku-home-widget/suku-home-widget.component';
import { SukuFiltersComponent } from './suku-filters/suku-filters.component';
import { SukuInfoButtonComponent } from './suku-info-button/suku-info-button.component';
import { SukuPrimaryButtonComponent } from './suku-primary-button/suku-primary-button.component';
import { SukuSecondaryButtonComponent } from './suku-secondary-button/suku-secondary-button.component';
import { SukuDefaultButtonComponent } from './suku-default-button/suku-default-button.component';
import { SukuStarBadgeComponent } from './suku-star-badge/suku-star-badge.component';
import { SukuSearchInputComponent } from './suku-search-input/suku-search-input.component';
import { SukuBidTagComponent } from './suku-bid-tag/suku-bid-tag.component';
import { SukuTrackProgressBarComponent } from './suku-track-progress-bar/suku-track-progress-bar.component';
import { SukuProductTraceWidgetComponent } from './suku-product-trace-widget/suku-product-trace-widget.component';
import { SukuTreeComponent } from './suku-tree/suku-tree.component';
import { SukuRatingStarComponent } from './suku-rating-star/suku-rating-star.component';
import { SukuCardTitleComponent } from './suku-card-title/suku-card-title.component';
import {SukuShippingWidgetComponent} from './suku-shipping-widget/suku-shipping-widget.component';
import { SukuResponseComponent } from './suku-response/suku-response.component';
import { SukuCreateCustomerComponent } from './suku-create-customer/suku-create-customer.component';
import { SukuBeneficialOwnerComponent } from './suku-beneficial-owner/suku-beneficial-owner.component';
import { SukuDwollaFundingAgreementComponent } from './suku-dwolla-funding-agreement/suku-dwolla-funding-agreement.component';
import { SukuDwollaFundingSourceComponent } from './suku-dwolla-funding-source/suku-dwolla-funding-source.component';
import { SukuCreationCustomerFileuploadComponent } from './suku-creation-customer-fileupload/suku-creation-customer-fileupload.component';
import { SukuPaymentPortalHelpComponent } from './suku-payment-portal-help/suku-payment-portal-help.component';
import { SukuTermsAndConditionsComponent } from './suku-terms-and-conditions/suku-terms-and-conditions.component';
import { SukuCardLineTypeOneComponent } from './suku-card-line-type-one/suku-card-line.component';
import { SukuCardLineTypeTwoComponent } from './suku-card-line-type-two/suku-card-line.component';
import { SukuRatingCardLineComponent } from './suku-rating-card-line/suku-rating-card-line.component';
import { SukuNotificationPanelComponent } from './suku-notification-panel/suku-notification-panel.component';
import { SukuAddIconComponent } from './suku-add-icon/suku-add-icon.component';
import { SukuHomepageComponent } from './suku-homepage/suku-homepage.component';
import { SukuHomepageSectionComponent } from './suku-homepage-section/suku-homepage-section.component';
import { SukuHomepageButtonComponent } from './suku-homepage-button/suku-homepage-button.component';
import { SukuProfileHeaderComponent } from './suku-profile-header/suku-profile-header.component';
import { SukuSocialIconsComponent } from './suku-social-icons/suku-social-icons.component';
import { SukuRadioButtonComponent } from './suku-radio-button/suku-radio-button.component';
@NgModule({
  declarations: [
    SukuBidTagComponent,
    SukuCardLineComponent,
    SukuDashboardProfileComponent,
    SukuDefaultButtonComponent,
    SukuHeadingComponent,
    SukuHomeItalicHeadingComponent,
    SukuHomeWidgetComponent,
    SukuInfoButtonComponent,
    SukuInlineDropdownComponent,
    SukuMailWidgetComponent,
    SukuMatchChipComponent,
    SukuNotificationWidgetComponent,
    SukuPrimaryButtonComponent,
    SukuProgressBarComponent,
    SukuSecondaryButtonComponent,
    SukuSubHeadingComponent,
    SukuLinkComponent,
    SukuAddWidgetComponent,
    SukuSelectInputComponent,
    SukuNavSubmenuComponent,
    SukuBidInfoComponent,
    SukuPhoneWidgetComponent,
    SukuAddressWidgetComponent,
    SukuSearchInputComponent,
    SukuProfileWidgetComponent,
    SukuStarBadgeComponent,
    SukuFiltersComponent,
    SukuTrackProgressBarComponent,
    SukuProductTraceWidgetComponent,
    SukuTreeComponent,
    SukuCardTitleComponent,
    SukuRatingStarComponent,
    SukuShippingWidgetComponent,
    SukuResponseComponent,
    SukuACHSettingsComponent,
    SukuTransactionHistoryComponent,
    SukuFundingSourceComponent,
    SukuCreateCustomerComponent,
    SukuBeneficialOwnerComponent,
    SukuDwollaFundingAgreementComponent,
    SukuDwollaFundingSourceComponent,
    SukuCreationCustomerFileuploadComponent,
    SukuPaymentPortalHelpComponent,
    SukuTermsAndConditionsComponent,
    SukuCardLineTypeOneComponent,
    SukuCardLineTypeTwoComponent,
    SukuRatingCardLineComponent,
    SukuNotificationPanelComponent,
    SukuAddIconComponent,
    SukuHomepageComponent,
    SukuHomepageSectionComponent,
    SukuHomepageButtonComponent,
    SukuProfileHeaderComponent,
    SukuSocialIconsComponent,
    SukuRadioButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    SukuBidTagComponent,
    SukuCardLineComponent,
    SukuDashboardProfileComponent,
    SukuDefaultButtonComponent,
    SukuHeadingComponent,
    SukuHomeItalicHeadingComponent,
    SukuHomeWidgetComponent,
    SukuInfoButtonComponent,
    SukuInlineDropdownComponent,
    SukuMailWidgetComponent,
    SukuMatchChipComponent,
    SukuNotificationWidgetComponent,
    SukuPrimaryButtonComponent,
    SukuProgressBarComponent,
    SukuSecondaryButtonComponent,
    SukuSubHeadingComponent,
    SukuLinkComponent,
    SukuAddWidgetComponent,
    SukuSelectInputComponent,
    SukuNavSubmenuComponent,
    SukuBidInfoComponent,
    SukuPhoneWidgetComponent,
    SukuAddressWidgetComponent,
    SukuSearchInputComponent,
    SukuProfileWidgetComponent,
    SukuStarBadgeComponent,
    SukuTrackProgressBarComponent,
    SukuProductTraceWidgetComponent,
    SukuFiltersComponent,
    SukuTreeComponent,
    SukuRatingStarComponent,
    SukuCardTitleComponent,
    SukuShippingWidgetComponent,
    SukuResponseComponent,
    SukuACHSettingsComponent,
    SukuTransactionHistoryComponent,
    RouterModule,
    SukuFundingSourceComponent,
    SukuCreateCustomerComponent,
    SukuBeneficialOwnerComponent,
    SukuDwollaFundingAgreementComponent,
    SukuDwollaFundingSourceComponent,
    SukuCreationCustomerFileuploadComponent,
    SukuPaymentPortalHelpComponent,
    SukuTermsAndConditionsComponent,
    SukuCardLineTypeOneComponent,
    SukuCardLineTypeTwoComponent,
    SukuRatingCardLineComponent,
    SukuNotificationPanelComponent,
    SukuAddIconComponent,
    SukuHomepageComponent,
    SukuHomepageSectionComponent,
    SukuHomepageButtonComponent,
    SukuProfileHeaderComponent,
    SukuSocialIconsComponent,
    SukuRadioButtonComponent
  ]
})
export class SukuWebcomponentsModule { }