import { CommonModule } from '@angular/common';
// import { NgModule } from '@angular/core';
import { NgModule, NO_ERRORS_SCHEMA, Injectable, CUSTOM_ELEMENTS_SCHEMA, Injector, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule,
  MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule,
  MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule,
  MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule,
  MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { SukuFundingSourceComponent } from '../lib/suku-funding-source/suku-funding-source.component';
import { SukuTransactionHistoryComponent } from '../lib/suku-transaction-history/suku-transaction-history.component';
import { SukuAchSettingModule } from './suku-achsettings/suku-achsettings.module';
import { SukuAddIconComponent } from './suku-add-icon/suku-add-icon.component';
import { SukuAddIconWidgetModule } from './suku-add-widget/suku-add-widget.module';
import { SukuAddressWidgetComponent } from './suku-address-widget/suku-address-widget.component';
import { SukuBeneficialOwnerComponent } from './suku-beneficial-owner/suku-beneficial-owner.component';
import { SukuBidInfoComponent } from './suku-bid-info/suku-bid-info.component';
import { SukuLargeBidTagComponent } from './suku-bid-tag-type-two/suku-bid-tag-type-two.component';
import { SukuBidTagModule } from './suku-bid-tag/suku-bid-tag.module';
import { SukuBidWidgetTagComponent } from './suku-bid-widget/suku-bid-widget.component';
import { SukuButtonsModule } from './suku-buttons/suku-button.module';
import { SukuCardLineTypeOneComponent } from './suku-card-line-type-one/suku-card-line.component';
import { SukuCardLineTypeTwoComponent } from './suku-card-line-type-two/suku-card-line.component';
import { SukuCardLineComponent } from './suku-card-line/suku-card-line.component';
import { SukuCardTitleComponent } from './suku-card-title/suku-card-title.component';
import { ScrollToBottomDirective } from './suku-chat-widget/suku-chat-scroll-directive';
import { SukuChatWidgetComponent } from './suku-chat-widget/suku-chat-widget.component';
import { SukuCreateCustomerComponent } from './suku-create-customer/suku-create-customer.component';
import { SukuCreationCustomerFileuploadComponent } from './suku-creation-customer-fileupload/suku-creation-customer-fileupload.component';
import { SukuDashboardProfileComponent } from './suku-dashboard-profile/suku-dashboard-profile.component';
import { SukuDropdownComponent } from './suku-dropdown/suku-dropdown.component';
import { SukuDwollaFundingAgreementComponent } from './suku-dwolla-funding-agreement/suku-dwolla-funding-agreement.component';
import { SukuDwollaFundingSourceComponent } from './suku-dwolla-funding-source/suku-dwolla-funding-source.component';
import { SukuFiltersComponent } from './suku-filters/suku-filters.component';
import { SukuFormFooterModule } from './suku-form-footer/suku-form-footer.module';
import { SukuHeaderComponent } from './suku-header/suku-header.component';
import { SukuHeadingComponent } from './suku-heading/suku-heading.component';
import { SukuHomeItalicHeadingComponent } from './suku-home-italic-heading/suku-home-italic-heading.component';
import { SukuHomeWidgetComponent } from './suku-home-widget/suku-home-widget.component';
import { SukuHomepageSectionComponent } from './suku-homepage-section/suku-homepage-section.component';
import { SukuHomepageComponent } from './suku-homepage/suku-homepage.component';
import { SukuImageWidgetComponent } from './suku-image-widget/suku-image-widget.component';
import { SukuInlineDropdownComponent } from './suku-inline-dropdown/suku-inline-dropdown.component';
import { SukuLinkComponent } from './suku-link/suku-link.component';
import { SukuLoaderModule } from './suku-loader/suku-loader.module';
import { SukuLoaderService } from './suku-loader/suku-loader.service';
import { SukuMailWidgetComponent } from './suku-mail-widget/suku-mail-widget.component';
import { SukuMatchChipComponent } from './suku-match-chip/suku-match-chip.component';
import { SukuModalModule } from './suku-modal/suku-modal.module';
import { SukuModalService } from './suku-modal/suku-modal.service';
import { SukuNavSubmenuComponent } from './suku-nav-submenu/suku-nav-submenu.component';
import { SukuNotificationPanelComponent } from './suku-notification-panel/suku-notification-panel.component';
import { SukuNotificationWidgetComponent } from './suku-notification-widget/suku-notification-widget.component';
import { SukuPaymentPortalHelpComponent } from './suku-payment-portal-help/suku-payment-portal-help.component';
import { SukuPhoneWidgetComponent } from './suku-phone-widget/suku-phone-widget.component';
import { SukuProductTraceWidgetComponent } from './suku-product-trace-widget/suku-product-trace-widget.component';
import { SukuProfileHeaderComponent } from './suku-profile-header/suku-profile-header.component';
import { SukuProfileWidgetComponent } from './suku-profile-widget/suku-profile-widget.component';
import { SukuProgressBarTypeOneComponent } from './suku-progress-bar-type-one/suku-progress-bar-type-one.component';
import { SukuProgressBarTypeTwoComponent } from './suku-progress-bar-type-two/suku-progress-bar-type-two.component';
import { SukuRadioButtonComponent } from './suku-radio-button/suku-radio-button.component';
import { SukuRatingCardLineComponent } from './suku-rating-card-line/suku-rating-card-line.component';
import { SukuRatingStarComponent } from './suku-rating-star/suku-rating-star.component';
import { SukuResponseComponent } from './suku-response/suku-response.component';
import { SukuSearchInputComponent } from './suku-search-input/suku-search-input.component';
import { SukuSelectInputComponent } from './suku-select-input/suku-select-input.component';
import { SukuShippingInfoWidgetComponent } from './suku-shipping-info-widget/suku-shipping-info-widget.component';
import { SukuShippingWidgetComponent } from './suku-shipping-widget/suku-shipping-widget.component';
import { SukuSocialIconsComponent } from './suku-social-icons/suku-social-icons.component';
import { SukuStarBadgeComponent } from './suku-star-badge/suku-star-badge.component';
import { SukuSubHeadingComponent } from './suku-sub-heading/suku-sub-heading.component';
import { SukuTermsAndConditionsComponent } from './suku-terms-and-conditions/suku-terms-and-conditions.component';
import { SukuTitleHeaderComponent } from './suku-title-header/suku-title-header.component';
import { SukuTrackProgressBarComponent } from './suku-track-progress-bar/suku-track-progress-bar.component';
import { SukuGalleryComponent } from './suku-gallery/suku-gallery.component';
import { SukuTreeComponent } from './suku-tree/suku-tree.component';
import { SukuFileUploadModule } from './suku-file-upload/suku-file-upload.module';
import { SukuCheckboxComponent } from './suku-checkbox/suku-checkbox.component';
import { SukuUserInputComponent } from './suku-user-input/suku-user-input.component';
import { SukuWysiwygEditorComponent } from './suku-wysiwyg-editor/suku-wysiwyg-editor.component';
import { SukuProfileImageIconComponent } from './suku-profile-image-icon/suku-profile-image-icon.component';
import { QuillModule } from 'ngx-quill';
import { SukuAddLicenseModalComponent } from './suku-add-license-modal/suku-add-license-modal.component';
import { SukuGalleryUploadComponent } from './suku-gallery-upload/suku-gallery-upload.component';
import { SukuConfirmationModalComponent } from './suku-confirmation-modal/suku-confirmation-modal.component';
import { SukuChipListComponent } from './suku-chip-list/suku-chip-list.component';
import { SukuDateTimePickerComponent } from './suku-date-time-picker/suku-date-time-picker.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { SukuIconWidgetComponent } from './suku-icon-widget/suku-icon-widget.component';
import { SukuDropdownWfcComponent } from './suku-dropdown-wfc/suku-dropdown-wfc.component';
import { SukuDateComponent } from './suku-date/suku-date.component';
import { SukuLoginComponent } from './suku-login/suku-login.component';
import { SukuProgressBarTypeThreeComponent } from './suku-progress-bar-type-three/suku-progress-bar-type-three.component';
import { SukuDisplayTableComponent } from './suku-display-table/suku-display-table.component';
import { SukuUsernameIconWidgetComponent } from './suku-username-icon-widget/suku-username-icon-widget.component';
import { SukuNavBarComponent } from './suku-nav-bar/suku-nav-bar.component';
import { SukuUserDetailsComponent } from './suku-user-details/suku-user-details.component';
import { SukuMessageBoxComponent } from './suku-message-box/suku-message-box.component';
import { SukuClaimsWidgetComponent } from './suku-claims-widget/suku-claims-widget.component';
import { SukuConfirmationStatusModalComponent } from './suku-confirmation-status-modal/suku-confirmation-status-modal.component';
import { SukuFormTableComponent } from './suku-form-table/suku-form-table.component';
import { SukuKeysPipe } from './suku-form-table/suku-key.pipe';
import { SukuMessageWidgetComponent } from './suku-message-widget/suku-message-widget.component';

@NgModule({
  declarations: [
    SukuCardLineComponent,
    SukuDashboardProfileComponent,
    SukuHeadingComponent,
    SukuHomeItalicHeadingComponent,
    SukuHomeWidgetComponent,
    SukuInlineDropdownComponent,
    SukuMailWidgetComponent,
    SukuMatchChipComponent,
    SukuNotificationWidgetComponent,
    SukuProgressBarTypeOneComponent,
    SukuProgressBarTypeTwoComponent,
    SukuSubHeadingComponent,
    SukuLinkComponent,
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
    SukuProfileHeaderComponent,
    SukuSocialIconsComponent,
    SukuRadioButtonComponent,
    SukuDropdownComponent,
    SukuHeaderComponent,
    SukuTitleHeaderComponent,
    SukuShippingInfoWidgetComponent,
    SukuImageWidgetComponent,
    SukuChatWidgetComponent,
    ScrollToBottomDirective,
    SukuLargeBidTagComponent,
    SukuBidWidgetTagComponent,
    SukuGalleryComponent,
    SukuCheckboxComponent,
    SukuUserInputComponent,
    SukuWysiwygEditorComponent,
    SukuProfileImageIconComponent,
    SukuConfirmationModalComponent,
    SukuAddLicenseModalComponent,
    SukuGalleryUploadComponent,
    SukuChipListComponent,
    SukuDateTimePickerComponent,
    SukuIconWidgetComponent,
    SukuDropdownWfcComponent,
    SukuDateComponent,
    SukuLoginComponent,
    SukuProgressBarTypeThreeComponent,
    SukuDisplayTableComponent,
    SukuUsernameIconWidgetComponent,
    SukuNavBarComponent,
    SukuUserDetailsComponent,
    SukuMessageBoxComponent,
    SukuClaimsWidgetComponent,
    SukuConfirmationStatusModalComponent,
    SukuFormTableComponent,
    SukuKeysPipe,
    SukuMessageWidgetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CountdownTimerModule,
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
    MatTooltipModule,
    SukuModalModule,
    SukuAchSettingModule,
    SukuAddIconWidgetModule,
    SukuBidTagModule,
    SukuButtonsModule,
    SukuFormFooterModule,
    SukuLoaderModule,
    SukuFileUploadModule,
    QuillModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [SukuModalService, SukuLoaderService],
  exports: [
    SukuCardLineComponent,
    SukuDashboardProfileComponent,
    SukuHeadingComponent,
    SukuHomeItalicHeadingComponent,
    SukuHomeWidgetComponent,
    SukuInlineDropdownComponent,
    SukuMailWidgetComponent,
    SukuMatchChipComponent,
    SukuNotificationWidgetComponent,
    SukuProgressBarTypeOneComponent,
    SukuProgressBarTypeTwoComponent,
    SukuSubHeadingComponent,
    SukuLinkComponent,
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
    SukuProfileHeaderComponent,
    SukuSocialIconsComponent,
    SukuRadioButtonComponent,
    SukuDropdownComponent,
    SukuHeaderComponent,
    SukuTitleHeaderComponent,
    SukuShippingInfoWidgetComponent,
    SukuImageWidgetComponent,
    SukuChatWidgetComponent,
    ScrollToBottomDirective,
    SukuLargeBidTagComponent,
    SukuGalleryComponent,
    SukuCheckboxComponent,
    SukuUserInputComponent,
    SukuButtonsModule,
    SukuBidWidgetTagComponent,
    SukuAddIconWidgetModule,
    SukuFileUploadModule,
    SukuModalModule,
    SukuWysiwygEditorComponent,
    SukuProfileImageIconComponent,
    SukuConfirmationModalComponent,
    SukuAddLicenseModalComponent,
    SukuGalleryUploadComponent,
    SukuChipListComponent,
    SukuDateTimePickerComponent,
    SukuIconWidgetComponent,
    SukuDropdownWfcComponent,
    SukuDateComponent,
    SukuLoginComponent,
    SukuProgressBarTypeThreeComponent,
    SukuDisplayTableComponent,
    SukuUsernameIconWidgetComponent,
    SukuNavBarComponent,
    SukuUserDetailsComponent,
    SukuMessageBoxComponent,
    SukuClaimsWidgetComponent,
    SukuConfirmationStatusModalComponent,
    SukuFormTableComponent,
    SukuMessageWidgetComponent
  ],
  entryComponents: [SukuConfirmationModalComponent, SukuAddLicenseModalComponent, SukuConfirmationStatusModalComponent],
  schemas: [],
})
export class SukuWebcomponentsModule {
}
