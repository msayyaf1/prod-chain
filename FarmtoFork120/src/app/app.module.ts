/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ProductComponent } from './Product/Product.component';
import { ContractComponent } from './Contract/Contract.component';
import { ShipmentComponent } from './Shipment/Shipment.component';

import { FarmerComponent } from './Farmer/Farmer.component';
import { ShipperComponent } from './Shipper/Shipper.component';
import { WarehousemanComponent } from './Warehouseman/Warehouseman.component';
import { DistributorComponent } from './Distributor/Distributor.component';
import { RetailerComponent } from './Retailer/Retailer.component';

import { DummyDataComponent } from './DummyData/DummyData.component';
import { CreateProductComponent } from './CreateProduct/CreateProduct.component';
import { CreateContractComponent } from './CreateContract/CreateContract.component';
import { CreateShipmentComponent } from './CreateShipment/CreateShipment.component';
import { ShipmentStatusUpdateComponent } from './ShipmentStatusUpdate/ShipmentStatusUpdate.component';
import { ProductStatusUpdateComponent } from './ProductStatusUpdate/ProductStatusUpdate.component';
import { ProductOwnerChangeComponent } from './ProductOwnerChange/ProductOwnerChange.component';
import { ShipmentInCustodyOfChangeComponent } from './ShipmentInCustodyOfChange/ShipmentInCustodyOfChange.component';

  @NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ContractComponent,
    ShipmentComponent,
    FarmerComponent,
    ShipperComponent,
    WarehousemanComponent,
    DistributorComponent,
    RetailerComponent,
    DummyDataComponent,
    CreateProductComponent,
    CreateContractComponent,
    CreateShipmentComponent,
    ShipmentStatusUpdateComponent,
    ProductStatusUpdateComponent,
    ProductOwnerChangeComponent,
    ShipmentInCustodyOfChangeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
